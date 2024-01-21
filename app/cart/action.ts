"use server"
import { revalidatePath } from "next/cache";
import { createCart,getCard } from "../lib/db/cart";
import prisma from "../lib/db/prisma";

 export async function SetQuantity(productId:string,quantity:number){
    const cart = (await getCard()) ?? (await createCart());
    const productInCart = cart.items.find(item => item.productId=== productId)

    if(quantity===0){
        if (productInCart){

            await prisma.cartItem.delete({where:{id:productInCart.id}})
        }


    }else{
        if (productInCart){

            await prisma.cartItem.update({where:{id:productInCart.id},data:{quantity}})
        }


    }

 revalidatePath("/cart")

 }