import React from "react";
import Image from "next/image";
import Container from "./container";
import { CardBody, CardContainer } from "./3d-card";
import product from "../assets/product.jpg";
export default function Product() {
  return (
    <div id="product">
    <Container />
    <div  className="w-full h-[100dvh] px-36 py-10 flex items-center bg-white">
      <div className=" w-[20rem] h-[28rem]  flex items-center justify-center border-r-[12px] border-b-[12px] border-[#FEF2E4]	rounded-2xl">
      <Image
          src={product}
          alt="product"
          className=" w-full h-full rounded-2xl "
        />
      </div>
    </div>
    </div>
  );
}
