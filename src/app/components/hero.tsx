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
      <div className=" relative flex w-full h-[100vh]" id="Welcome">
        <Navbar />
        <Image
          src={landing}
          layout="fill"
          alt="landing"
          className="object-cover  h-full"
        />

        {/* <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-start p-8"
          id="Welcome">
          <div className=" text-white  felx flex-row">
            <h1 className="text-4xl font-bold mb-4">
              with Aureliara rediscover{" "}
            </h1>
            <FlipWords
              words={["Welcome", "Hola", "Bonjour", "Ciao"]}
              className="text-black"
              id="Welcome"
            />
          </div>
        </div> */}
        <div className="absolute flex lg:justify-start md:justify-start justify-center items-center w-full h-full">
          <div className="h-full flex items-center flex-col justify-center ">
            <h1 className="md:text-6xl lg:text-7xl text-2xl ml-2 font-poppins md:ml-12 md:leading-tight leading-normal lg:leading-tight text-green-950">
              Glowing expert for your <br /> beautiful healthy skin
            </h1>
          </div>
        </div>
        <ScrollDownButton />
        
      </div>
      {/* <Container /> */}
    </>
  );
}
