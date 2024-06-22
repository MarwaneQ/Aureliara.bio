"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Hero from "./hero";
import Image from "next/image";
import logo from "../assets/secondary.png";
import Product from "./product";
import About from "./about";
export default function App() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-primary absolute top-0 left-0  z-10 w-full flex flex-col justify-center items-center gap-10 tracking-tight ">
        <h1 className="text-7xl text-secondary" id="title-1">
          Aureliara
        </h1> 
        
       <h1 className="text-4xl text-secondary" id="title-2">
          Cosmitcs
        </h1>
        {/* <h1 className="text-7xl" id="title-3">
          Glow
        </h1>  */}
      </div>
      <div className="  ">
        <Hero />
        <Product />
        <About />
      </div>
      
    </div>
  );
}
