import React from "react";
import Container from "./container";
import Image from "next/image";
import aboutImage from "../assets/about-img.jpg";
export default function About() {
  return (
    <section id="about" className="">
      <Container text={"About Us"} />
      <div className="w-full h-[100dvh] px-2 py-10 flex items-center justify-evenly bg-white md:flex-row lg:flex-row flex-col">
        <div className="flex flex-col items-center h-full justify-center p-5 mt-32 md:mt-0  ">
          <h1 className="font-bold md:text-5xl text-3xl text-primary "></h1>
          <h4 className="p-3 md:text-xl text-green-800">
            Niacinamide 10% & Zinc
          </h4>
          <div className="flex justify-start flex-col">
            <p className="md:w-[45rem] mb-2">
              WhisperPetals Cosmetics is an ethereal oasis for skincare
              enthusiasts seeking a luxurious experience. Our products are
              crafted with the utmost care and attention to detail, using only
              the finest ingredients to pamper your
            </p>
          </div>
        </div>
        <div className=" w-[20rem] h-[28rem]   flex items-center flex-col  border-r-[12px] border-b-[12px] border-[#FEF2E4]	rounded-2xl">
          <Image
            src={aboutImage}
            alt="product"
            className=" object-cover h-full rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
}
