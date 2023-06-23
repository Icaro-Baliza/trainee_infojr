import {prisma} from "./prisma";

export interface Order {
    id: number;
    name: string;
    breads: number;
    bill: number;
}

// função para pegar todas os pedidos
export async function getAllOrders(){
    const orders = await prisma.order.findMany();
    return orders;
}

// Função para armazenar um pedido no banco de dados
export async function createOrder(name: string, breads: number, bill: number) {
   await prisma.order.create({
        data:{
          name,
          breads,
          bill,
        }
      });
}

export async function deleteOrder(id: string| string[]|undefined) {
    await prisma.order.delete({where: {id: Number(id)}});
}
