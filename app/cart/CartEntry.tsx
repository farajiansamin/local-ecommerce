"use client";

import React, { useTransition } from "react";
import { CartItemWithProduct } from "../lib/db/cart";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "../lib/format";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

export default function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();

  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i < 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          className="rounded-lg"
          src={product.imgUrl}
          alt={product.name}
          width={200}
          height={200}
        />
        <div>
          <Link href={"/products/" + product.id} className="font-bold">
            {product.name}
          </Link>
          <div>Price:{formatPrice(product.price)}</div>
          <div className="my-1 flex items-center gap-2">
            Quantity:{" "}
            <select
              className=" select select-boarder w-full max-w-[80px]"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            > {}
              <option value={0}>0(Remove)</option>{quantityOptions}
            </select>
          </div>
          <div className="flex items-center gap-3">
            {" "}
            Total: {product.price * quantity}
          </div>
          {isPending && <span className="loading loading-spinner loading-sm" />}
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
}
