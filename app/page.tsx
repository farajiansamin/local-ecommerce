import Link from "next/link";
//import products from "../products.json";
import ProductCard from "./components/ProductCard";
import Image from "next/image";
import prisma from "../app/lib/db/prisma"
//console.log(products);

export default async function Home() {
  const products= await prisma.product.findMany({
  orderBy: {
    id: "desc",} });

  // here is the product banner

  return (
    <div>
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={10000}
            height={10000}
            className="w-full max-w-md rounded-lg shadow-2xl"
            priority
          />
          <div>
            <h1 className="text-5xl font-bold">{products[0].name}</h1>
            <p className="py-6">{products[0].description}</p>
            <Link
              href={"/products/" + products[0].id}
              className={"btn btn-primary"}
            >
              {" "}
              Check it out
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.slice(1).map((product)=>( <ProductCard key={product.id} product={product}/>
        )
        
        
        )}



      </div>


    </div>
  );
}
