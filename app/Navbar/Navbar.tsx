import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from "../assest/ecommerce-logo.png"
import { redirect } from 'next/navigation'
import ShoppingCartIcon from './ShoppingCartIcon'
import { getCard } from '../lib/db/cart'


async function handleSearchProducts(formData:FormData){
    "use server"
    const searchQuery= formData.get("searchQuery") ?.toString();
    if(searchQuery){redirect("/search?query="+searchQuery) }
}

export default async function Navbar() {
    const cart = await getCard();
    console.log(cart)
  return (
    <div className='bg-base-100'>
        <div className='navbar max-w-7xl m-auto flex-col sm:flex-row gap-2' >
            <div className="flex-1">
                <Link href="/" className='btn btn-ghost text-xl normal-case'><Image  src={logo}  height={40} width={40} alt="Logo"/>AreaBazaar </Link>
                
            </div>
            <div className='flex-none gap-2'>
                <form action={handleSearchProducts}>
                    <div className='form-control'>
                        <input name="searchQuery" placeholder='Search' className='input input-bordered w-full min-w-[100]'>
                        
                        </input>
                    </div>
                </form>
                <ShoppingCartIcon cart={cart} />


            </div>
            
        </div>
        </div>
  )
}

