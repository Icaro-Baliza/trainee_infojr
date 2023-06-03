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

router.get("/busca-id/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const user = await prisma.user.findUnique({where: {Id: parseInt(id)}});
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
        return res.json(user);
    }
    catch (error){
        return res.json({error})
    }
})


export{router};