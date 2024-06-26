import React from "react";
import Container from "./container";
import Image from "next/image";
import aboutImage from "../assets/about-img.jpg";
import landing2 from "../assets/landing2.png";
export default function About() {
  return (
    <div id="about" className="">
      <Container text={"About Us"} />
      <div className="w-full  px-2  flex items-center justify-evenly bg-white md:flex-row lg:flex-row flex-col">
        <div className="flex flex-col items-center  justify-center p-5  md:mt-0  ">
        <Image
              src={landing2}
              layout=""
              alt="landing"
              className="  h-full md:w-[35rem] "
            />
          <h4 className="p-3 md:text-xl text-green-800">
            Niacinamide 10% & Zinc
          </h4>
          <div className="flex justify-start flex-col">
            <p className="md:w-[45rem] mb-2">
              Welcome to Aureliara, where we believe that true beauty radiates
              from within and is reflected in the care you give to your skin.
              Our mission is to illuminate your natural glow through premium,
              science-backed skincare solutions that harmonize with nature’s
              finest ingredients. At Aureliara, we harness the power of nature
              to bring out your skin’s natural elegance. Each product is crafted
              with carefully selected botanical extracts and organic
              ingredients, ensuring that your skin receives the purest, most
              effective care. We combine the wisdom of nature with cutting-edge
              scientific research. Our formulations are meticulously developed
              by skincare experts to provide visible results, enhancing your
              skin’s health and vitality. Our commitment to sustainability and
              eco-friendly practices is at the heart of everything we do. Our
              packaging is designed to be recyclable, and we strive to minimize
              our environmental footprint at every step of our production
              process. Aureliara celebrates all skin types and tones. Our
              diverse range of products is designed to meet the unique needs of
              every individual, promoting inclusivity and confidence in your
              natural beauty. Thank you for choosing Aureliara. Embrace the
              radiance within and let your natural beauty shine.
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
    </div>
  );
}
