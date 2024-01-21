import React from "react";
import { getCard } from "../lib/db/cart";
export const metadata = { title: "Your Cart" };
import CartEntry from "./CartEntry";
import { SetQuantity } from "./action";
import { formatPrice } from "../lib/format";

export default async function () {
  const cart = await getCard();
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold"> Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={SetQuantity}
        />
      ))}

      {!cart?.items.length && <p> Your Cart is Empty.</p>}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
            Total :{formatPrice(cart?.subtotal ||0)}


        </p>
        <button className="btn btn-primary sm:w-[200px]"> Checkout</button>


      </div>
    </div>
  );
}
