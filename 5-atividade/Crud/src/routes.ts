import {Router} from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = Router();

//Rota para fazer cadastro do usuario
router.post("/cadastro", async (req, res) => {
    try{
        const {nome, email, idade, estado, cidade} = req.body;

        //Verifica se o email já está cadastrado no sistema
        let user = await prisma.user.findUnique({where: {email}});
        if(user) {
            return res.json({error: "Email já cadastrado"});
        }

        //Cria usuario com os parametros recebidos
        user = await prisma.user.create({
            data: { nome, email, idade, estado, cidade}
        });
        return res.json(user);
    }
    catch (error){
        return res.json({error});
    }
})

//Rota que retornar usuario por Id
router.get("/busca-id/:Id", async (req, res) => {
    try{
        const {Id} = req.params;

        //Procura usuario no sistema com o id
        const user = await prisma.user.findUnique({where: {Id: parseInt(Id)}});
        
        //Verifica se não existe usuario com o id
        if (!user){
            return res.json({error: "Id inválido"});
        }
        return res.json(user);
    }
    catch (error){
        return res.json({error});
    }
})

//Rota que retorna usuario por email
router.get("/busca-email/:email", async (req, res) => {
    try{
        const {email} = req.params;
        const user = await prisma.user.findUnique({where: {email}});
        if (!user){
            return res.json({error: "Email inválido"})
        }
        return res.json(user);
    }
    catch (error){
        return res.json({error})
    }
})

//Rota que retorna uma lista de usuarios a partir de uma lista de nomes
//ou seja a entrada do json para esta rota é no formato:
//{"lista": ["nome1", "nome2", "nome3", ...]}
router.get("/busca-nomes", async (req, res) => {
    try{
        const {lista}= req.body;

        //Saida com todos os usuarios
        let saida = [];

        //Loop que busca usuario por cada nome da entrada
        for (let i = 0; i < lista.length; i++){
            const nome = lista[i];
            const users = await prisma.user.findMany({where: {nome}});
            
            //Verifica se não existe usuario com um dos nomes da lista
            if (!users){
                return res.json({error: nome + " não consta no sistema"});
            }

            //Adicionada todos os usuario com nome x na saida
            for (let j = 0; j<users.length; j++){
                saida.push(users[j]);
            }
        }
        return res.json(saida);
    }
    catch(error){
        return res.json(error);
    }
})

//Rota que deleta usuario por Id
router.delete("/deleta-usuario/:Id", async (req, res) => {
    try{
        const {Id} = req.params;
        
        //Verifica se não existe usuario com o id
        const user = await prisma.user.findUnique({where: {Id: parseInt(Id)}});
        if (!user){
            return res.json({error: "Id inválido"})
        }

        await prisma.user.delete({ where: {Id: parseInt(Id)}})
        return res.json({message: "Usuário deletado"})

    }
    catch(error){
        return res.json({error})
    }
})

//Rota para atualizar cadastro de um usuario por id
router.put("/atualiza-cadastro/:Id", async (req, res) => {
    try{
        const {Id} = req.params;
        const {nome, email, idade, estado, cidade} = req.body; 

        //Verifica se existe usuaruio com o Id
        let user = await prisma.user.findUnique({where: {Id: parseInt(Id)}});
        if (!user){
            return res.json({error: "Id inválido"});
        }

        //Verifica se o email recebido já esta cadastrado no sistema
        user = await prisma.user.findUnique({where: {email}});
        if(user) {
            return res.json({error: "Email já cadastrado"});
        }

        //Atualiza os dados do usuario 
        user = await prisma.user.update({
            where: {Id: parseInt(Id)},
            data: {nome, email, idade, cidade, estado}

        });
        return res.json(user);
    }
    catch(error){
        return res.json({error});
    }
})


export{router};