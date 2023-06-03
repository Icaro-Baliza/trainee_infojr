import {Router} from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = Router();

router.post("/cadastro", async (req, res) => {
    try{
        const {nome, email, idade, estado, cidade} = req.body;

        let user = await prisma.user.findUnique({where: {email}})

        if(user) {
            return res.json({error: "Email já cadastrado"})
        }

        user = await prisma.user.create({
            data: {
                nome,
                email,
                idade,
                estado,
                cidade,
            },
        });
        return res.json(user)
    }
    catch (error){
        return res.json({error})
    }
})

router.get("/busca-id/:Id", async (req, res) => {
    try{
        const {Id} = req.params;
        const user = await prisma.user.findUnique({where: {Id: parseInt(Id)}});
        if (!user){
            return res.json({error: "Id inválido"})
        }
        return res.json(user);
    }
    catch (error){
        return res.json({error})
    }
})

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

router.get("/busca-nomes", async (req, res) => {
    try{
        const {lista}= req.body;
        let saida = []
        for (let i = 0; i < lista.length; i++){
            const nome = lista[i];
            const user = await prisma.user.findFirst({where: {nome}});
            if (!user){
                return res.json({error: nome + "não encontrado"})
            }
            saida.push(user);
        }
        return res.json(saida);
    }
    catch(error){
        return res.json(error);
    }
})

router.delete("/deleta-usuario/:Id", async (req, res) => {
    try{
        const {Id} = req.params;
        
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




router.put("/atualiza-cadastro/:Id", async (req, res) => {
    try{
        const {Id} = req.params;
        const {nome, email, idade, estado, cidade} = req.body; 

        let user = await prisma.user.findUnique({where: {Id: parseInt(Id)}});
        
        if (!user){
            return res.json({error: "Id inválido"})
        }

        user = await prisma.user.findUnique({where: {email}})

        if(user) {
            return res.json({error: "Email já cadastrado"})
        }

        user = await prisma.user.update({
            where: {Id: parseInt(Id)},
            data: {nome, email, idade, cidade, estado}

        })
        return res.json(user);
    }
    catch(error){
        return res.json({error})
    }
})


export{router};