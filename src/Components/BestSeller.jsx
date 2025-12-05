import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {

  const { products } = useContext(shopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestSeller));
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST SELLER"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs md:text-base ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae laboriosam natus ad,</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {bestSeller.map((item,index
      ) => (
        <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
      ))}
      </div>
    </div>
  );
};

export default BestSeller;
