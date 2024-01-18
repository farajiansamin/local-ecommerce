import React from 'react'
import Link from 'next/link';
import PriceTag from './PriceTag';
import Image from 'next/image';

import {product} from "@prisma/client"

interface ProductCardProps{
    
    product :product;


}

const ProductCard = ({product}:ProductCardProps) => {
    // const isNew = Date.now()- new Date(product.createdAt).getTime()< 100*60*60*23*7;
    const isNew= true;



  return (
    <Link   className="card w-full bg-base-100 hover:shadow-xl transition-shadow" href={"/products/" + product.id}> 
    <figure>
        <Image
            src={product.imgUrl}
            alt={product.name}
            width={800}
            height={400}
            className='h-48 object-cover'
        
        
        
        />



    </figure>
    <div className='card-body'>
        <h2 className='card-title'>{product.name}{isNew && <div className ="badge badge-seco">New</div>}</h2>
        <p>{product.description}</p>
        <PriceTag price={product.price} />



    </div>
    
    
    </Link>

     
  )
}

export default ProductCard