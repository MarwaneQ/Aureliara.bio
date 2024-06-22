import React from "react";
import Image from "next/image";
import Container from "./container";
import { CardBody, CardContainer } from "./3d-card";
import product from "../assets/product.jpg";
export default function Product() {
  return (
    <div id="product">
      <Container />
      <div className="w-full h-[100dvh] px-2 py-10 flex items-center justify-evenly bg-white md:flex-row lg:flex-row flex-col">
        <div className=" w-[20rem] h-[28rem]  flex items-center  border-r-[12px] border-b-[12px] border-[#FEF2E4]	rounded-2xl">
          <Image
            src={product}
            alt="product"
            className=" w-full h-full rounded-2xl "
          />
        </div>
        <div className="flex flex-col items-center h-full justify-center p-5  ">
          <h1 className="font-bold md:text-5xl text-3xl text-primary ">
            Anti-Imperfections
          </h1>
          <h4 className="p-3 md:text-xl text-green-800">Niacinamide 10% & Zinc</h4>
          <p className="md:w-[45rem]">
            Experience the transformative power of our Anti-Imperfections
            Niacinamide 10% & Zinc serum, meticulously crafted to target and
            reduce the appearance of blemishes and imperfections. This advanced
            formula harnesses the synergistic effects of Niacinamide (Vitamin
            B3) and Zinc to promote a clearer, smoother, and more radiant
            complexion.
          </p>
          <h3>benifets</h3>
          <p className="md:w-[45rem] ">
            - Blemish Control: Niacinamide at a potent 10% concentration helps to
            visibly reduce the appearance of blemishes and skin congestion,
            ensuring a clearer complexion.
            <br /> 
            - Oil Regulation: Zinc works in harmony
            with Niacinamide to regulate sebum production, minimizing excess oil
            and preventing future breakouts.
            <br /> 
            - Pore Refinement: Effectively
            reduces the appearance of enlarged pores, creating a smoother skin
            texture. 
            <br /> 
            - Even Skin Tone: Niacinamide is known for its ability to
            improve skin tone and texture, diminishing the appearance of dark
            spots and redness. 
            <br /> 
            - Anti-Inflammatory: Both Niacinamide and Zinc
            possess anti-inflammatory properties that soothe irritated skin,
            making this serum ideal for sensitive and acne-prone skin.
          </p>
        </div>
      </div>
    </div>
  );
}
