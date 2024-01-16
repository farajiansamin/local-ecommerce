import React from 'react'
import AddtoCartButton from './AddtoCartButton';

//import {prisma} from "../lib/db/prisma"
import products from "@/products.json";
import Image from 'next/image';
import PriceTag from '@/app/components/PriceTag';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import { Metadata } from 'next';
console.log(products);



interface ProductPageProps {
    params:{
        id :string
    }
}

interface product{
    id: string , name :string, price: number, imageUrl:string, description :string
    


}
 const getProduct = cache ( async (id:string) =>{
    const product = await products.find(product => product.id == id);
    if (!product){ notFound();}
    return product
 })


 export async function generateMetadata({params:{id}}:ProductPageProps): Promise <Metadata>{
    const product=await getProduct(id)
    return { title : product.name , description:product.description, openGraph :{images :[{url:product.imageUrl}]}}

 }

export default async function ProductPage({params:{id}}:ProductPageProps){

    //const product =await prisma.product.findUnique({where :{id}})
    const product=await getProduct(id)
    

    return (
        <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
            <Image 
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className='rounded-lg'
            priority
            
            
            />
            <div>
                <h1 className='text-5xl font-bold'> {product.name}

                </h1>
                <PriceTag price={product.price} className='mg-4'/>

                <p className='py-6'> {product.description}</p>


            </div>



        </div>





    )

}