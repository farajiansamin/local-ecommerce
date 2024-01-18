import prisma from "../db/prisma";
import { cookies } from "next/headers";
import { cart } from "@prisma/client";

export type CartsWithProducts= Prisma.cartGet
export type ShoppingCart= cart &{
    size: number,
    subtotal:number,
}


export async function createCart() {
  const newCart = await prisma.cart.create({
    data: {},
  });

  // Note: needs encryption+secure settings in real production

  cookies().set("localCardId", newCart.id);
}

export async function gerCard() {
  const localCartId = cookies().get("loca;CartId")?.value;
  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items: { include: { product: true } } },
      })
    : null;

    if (!cart){return null} 
    return {
        ...cart,
        size: cart.items.reduce((acc,item) =>acc + item.quantity,0),
        subtotal: cart.items.reduce((acc,item)=> acc + item.quantity * item.product.price,0)
       
    }
}
