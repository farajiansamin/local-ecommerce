import prisma from "../db/prisma";
import { cookies } from "next/headers";

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
        size: cart.items.reduce((acc,item) =>acc + item.quanitity,0)
        subtotal: cart.items.reduce((acc,item)=> acc + item.quantity * item.product.price,0)
       
    }
}
