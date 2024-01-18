"use server";

import React from "react";
import { createCart, getCard } from "@/app/lib/db/cart";
import prisma from "@/app/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(productId: string) {
  const cart = (await getCard()) ?? (await createCart());

  const productInCart = cart.items.find(item => item.productId=== productId)

  if (productInCart){

    await prisma.cartItem.update({
      where :{id : productInCart.id},
      data :{ quantity :{increment:1}}
      })
} else{

  await prisma.cartItem.create({
    data :{
      cartId:cart.id,
      productId:productId,
      quantity:1,

    }

  })
}
 revalidatePath("/product/[id]")
}
