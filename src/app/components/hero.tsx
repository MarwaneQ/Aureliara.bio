import React from "react";
import Image from "next/image";
import landing from "../assets/landing.jpeg";
import Navbar from "./navbar"; // Assuming you have a Navbar component
import { FlipWords } from "./flip-words"; // Assuming you have a FlipWords component
import { HeroHighlight, Highlight } from "./hero-highlight";
export default function Hero() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-[100vh]" id="Welcome">
        <Image
          src={landing}
          layout="fill"
          alt="landing"
          className="object-cover w-full h-full"
        />
        <div
          className="absolute top-0 left-16 w-full h-full flex items-center justify-start p-8"
          id="Welcome">
          <div className=" text-white  felx flex-row">
            <h1 className="text-4xl font-bold mb-4">
              with Aureliara rediscover{" "}
              
            </h1>
            <FlipWords
                words={["Welcome", "Hola", "Bonjour", "Ciao"]}
                className="text-black"
              />
          </div>
        </div>
      </div>
    </>
  );
}
