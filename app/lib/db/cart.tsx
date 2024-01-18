import prisma from "../db/prisma";
import { cookies } from "next/headers";
import { cart, Prisma } from "@prisma/client";

export type CartsWithProducts = Prisma.cartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type ShoppingCart = CartsWithProducts & {
  size: number;
  subtotal: number;
};

export async function createCart(): Promise<ShoppingCart> {
  const newCart = await prisma.cart.create({
    data: {},
  });

  // Note: needs encryption+secure settings in real production

  cookies().set("localCardId", newCart.id);

  return {
    ...newCart,
    size: 0,
    subtotal: 0,
    items: [],
  };
}

export async function getCard(): Promise<ShoppingCart | null> {
  const localCartId = cookies().get("loca;CartId")?.value;
  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items: { include: { product: true } } },
      })
    : null;

  if (!cart) {
    return null;
  }
  return {
    ...cart,
    size: cart.items.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: cart.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    ),
  };
}
