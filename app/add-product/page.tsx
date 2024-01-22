import React from "react";
import PostProductButton from "../components/PostProductButton";
import prisma from "../lib/db/prisma";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function addProduct(formData: FormData) {
  "use server";
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }
  await prisma.product.create({ data: { name, description, imageUrl, price } });
  redirect("/");
}

export async function addProductPage () {
  const session= await getServerSession(authOptions)
  if (!session){ redirect("api/auth/signin?callbackurl=/add-product")}
  return (
    <div>
      <h1 className="mb-3  text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input input-bordered w-full mb-3"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input input-bordered w-full mb-3"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input input-bordered w-full mb-3"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full mb-3"
        />

        <PostProductButton className="btn-block">
          {" "}
          Add Product
        </PostProductButton>
      </form>
    </div>
  );
};


