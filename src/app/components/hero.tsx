import React from "react";
import Image from "next/image";
import landing from "../assets/landing.jpeg";
import Navbar from "./navbar"; // Assuming you have a Navbar component

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
          className="absolute top-0 left-0 w-full h-full flex items-center justify-start p-8"
          id="Welcome">
          <div className="text-left text-primary max-w-lg">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
            <p className="text-lg mb-4">
              Discover the best products and services to enhance your lifestyle.
            </p>
            <a href="#products" className="text-lg font-semibold underline">
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
