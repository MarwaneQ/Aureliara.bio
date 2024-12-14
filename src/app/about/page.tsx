import React from "react";
import Image from "next/image";
import aboutImage from "../assets/aboutImage.jpg";
import logo2 from "../assets/landing2.png";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";

export default function Page() {
  let text = "Where Science Meets Serenity";
  return (
    <section
      id="about"
      className="h-full md:mb-16 flex flex-col items-center  mb-16">
        <Navbar />
      <div className="w-full    px-2  flex items-center justify-evenly bg-white md:flex-row lg:flex-row flex-col my-28">
        <div className="flex flex-col items-center  justify-center p-5  md:mt-0 text-center md:text-start ">
          <h3>About</h3>
          <Image
            src={logo2}
            layout=""
            alt="landing"
            className="  h-full w-[15rem] md:w-[23rem] "
          />
          <h4 className="p-3 md:text-xl text-green-800">
            {text.toUpperCase()}
          </h4>
          <div className="flex justify-start flex-col">
            <p className="md:w-[45rem] mb-2">
              we believe that true beauty radiates from within and is reflected
              in the care you give to your skin.
              <br />
              Our mission is to illuminate your natural glow through premium,
              science-backed skincare solutions that harmonize with nature’s
              finest ingredients.
              <br />
            </p>
          </div>
        </div>
        <div className=" w-[20rem] h-[28rem] flex items-center flex-col  border-r-[12px] border-b-[12px] border-[#FEF2E4]	rounded-2xl">
          <Image
            src={aboutImage}
            alt="product"
            className=" object-cover h-full rounded-2xl "
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}
