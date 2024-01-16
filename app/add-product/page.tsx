import React from "react";
import PostProductButton from "../components/PostProductButton";
//import {prisma} from `../lib/db/prisma`;

import { redirect } from "next/navigation";



async function addProduct(formData:FormData) {
  "use server"
  const name = formData.get('name')?.toString();
  const description = formData.get('description')?.toString();
  const imgUrl =formData.get('imgUrl')?.toString();
  const price =Number(formData.get('price')|| 0);


  if (!name || !description || !imgUrl || !price){
    throw Error("Missing required fields");
  }


  //await prisma?.product.create ({
   
    //data :{ name, description, imgUrl , price}
 // })

  redirect("/")
}

const addProductPage = () => {
  return (
    <div>
      <h1 className="mb-3  text-lg font-bold">Add Product</h1>
      <form  action={addProduct}>
        <input required name="name" placeholder="Name" className="input input-bordered w-full mb-3"/>
        <input required name="imgUrl" placeholder="Image URL" type="url" className="input input-bordered w-full mb-3"/> 
        <input required name="price" placeholder="Price" type="number" className="input input-bordered w-full mb-3"/> 
        <textarea required name="description" placeholder="Description" className="textarea textarea-bordered w-full mb-3"/> 
        
       
        
        <PostProductButton className="btn-block"> Add Product</PostProductButton>
        
      </form>
    </div>
  )
};

export default addProductPage;
