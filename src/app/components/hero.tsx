import React from "react";
import Image from "next/image";
import landing from "../assets/landing.jpeg";
import Navbar from "./navbar";
import { FlipWords } from "./flip-words";
import ScrollDownButton from "./scrolldownbutton";
import Container from "./container";
export default function Hero() {
  return (
    <>
      <section className=" relative flex w-full h-[100vh]" id="Welcome">
        <Navbar />
        <Image
          src={landing}
          layout="fill"
          alt="landing"
          className="object-cover  h-full"
        />
        <div className="absolute flex lg:justify-start md:justify-start justify-center items-center w-full h-full">
          <div className="h-full flex items-center flex-col justify-center ">
            <h1 className="md:text-6xl lg:text-7xl text-2xl ml-2 font-poppins md:ml-12 md:leading-tight leading-normal lg:leading-tight text-green-950">
              Glowing expert for your <br /> beautiful healthy skin
            </h1>
          </div>
        </div>
        <ScrollDownButton />
        
      </section>
      {/* <Container /> */}
    </>
  );
}
