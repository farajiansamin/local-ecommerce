import React from "react";
import PostProductButton from "../components/PostProductButton";



const addProductPage = () => {
  return (
    <div>
      <h1 className="mb-3  text-lg font-bold">Add Product</h1>
      <form >
        <input required name="name" placeholder="Name" className="input input-bordered w-full mb-3"/>
        <input required name="imgUrl" placeholder="Image URL" type="url" className="input input-bordered w-full mb-3"/> 
        <input required name="price" placeholder="Price" type="number" className="input input-bordered w-full mb-3"/> 
        <textarea required name="description" placeholder="Description" className="textarea textarea-bordered w-full mb-3"/> 
        
       
        
        <PostProductButton />
        
      </form>
    </div>
  )
};

export default addProductPage;
