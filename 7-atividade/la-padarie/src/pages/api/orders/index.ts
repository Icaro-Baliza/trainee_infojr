import type { NextApiRequest, NextApiResponse } from 'next'
import { createOrder, deleteOrder, getAllOrders } from '@/lib/db';
import {prisma} from "../../../lib/prisma";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {method} = req;

  switch(method){
    // pedir todos os pedidos
    case "GET":
      const orders = await getAllOrders();

      if(!orders){
          return res.json({ error: "Você não cadastrou nenhum usuário."});
      }

      return res.status(200).json(orders)

    // criar um pedido
    case "POST":
      const { name, breads, bill }  = req.body;
      await createOrder(name, breads, bill);

      return res.status(201).json({message: "success"})

    // função para deletar um pedido
    case "DELETE":
      // primeiro verifica se tem o usuário
      const {id} = req.query;

      const order = await prisma.order.findUnique({where: {id: Number(id)}});
      
      if(!order){
          return res.json({ error: "Usuário não encontrado."});
      }
      
      await deleteOrder(id);

      return res.json({message: "Usuário deletado."}); 
  }
  
  return res.status(404).json({ message: 'Route not found'});
}
