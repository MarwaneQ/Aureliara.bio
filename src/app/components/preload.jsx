"use client";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import landing from "../assets/landing.jpeg";
import aur from "../assets/secondary.png";
import Navbar from "./navbar";

export default function Preload() {
  const comp = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const heroContainerRef = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap.timeline({
      onComplete: () => {
        setAnimationComplete(true);

        gsap.fromTo(
          heroContainerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5 }
        );

        gsap.fromTo(
          heroContainerRef.current.querySelector(".animate-moveUp"),
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, ease: "power4.out" }
        );
      },
    });

    tl.from("#intro-slider", {
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

    return () => tl.revert();
  }, []);

  return (
    <section className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-primary absolute top-0 left-0  z-10 w-full flex flex-col justify-center items-center gap-10 tracking-tight ">
        <Image
          src={aur}
          alt="aur"
          className="w-96"
          id="title-1"
          priority={true}
        />
      </div>
      <div
        className="h-[100dvh] flex bg-secondary justify-center place-items-center"
        ref={heroContainerRef}>
        {animationComplete && (
          <div
            className="relative flex w-full h-[100dvh] flex-wrap"
            id="Welcome">
            <Navbar />
            <Image
              src={landing}
              layout="fill"
              alt="landing"
              className="object-cover h-full"
            />
            <div className="absolute flex lg:justify-start md:justify-start justify-start items-start w-full h-full">
              <div
                ref={heroContainerRef}
                className="h-full flex items-start flex-col justify-center ">
                <h1 className="md:text-6xl lg:text-[4.08rem] text-6xl ml-10 font-poppins md:ml-12 md:leading-tight leading-normal lg:leading-tight text-green-950 animate-moveUp">
                  Glowing expert for your <br /> beautiful healthy skin
                </h1>
                <div className="md:ml-12 ml-2">
                  <button
                    type="button"
                    ref={heroContainerRef}
                    className="bg-primary transition  hover:bg-transparent text-secondary hover:text-primary border border-green-800 rounded-full md:my-5 md:mx-2 ml-10 my-6 px-8 py-2 justify-start animate-moveUp-btn">
                    <a href="/">Shop now</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
        
    </section>
  );
}
