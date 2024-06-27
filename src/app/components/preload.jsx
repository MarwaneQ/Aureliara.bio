"use client";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import landing from "../assets/landing.jpeg";
import aur from "../assets/secondary.png";
import Navbar from "./navbar";
import ScrollDownButton from "./scrolldownbutton";

export default function App() {
  const comp = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const heroContainerRef = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap.timeline({
      onComplete: () => {
        setAnimationComplete(true); // Update state on animation complete
        // Fade in the hero container
        gsap.fromTo(
          heroContainerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5 }
        );

        // Animate the h1 element
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

    return () => tl.revert(); // Revert the timeline on component unmount
  }, []);

  return (
    <section className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-primary absolute top-0 left-0  z-10 w-full flex flex-col justify-center items-center gap-10 tracking-tight ">
        <Image src={aur} alt="aur" className="w-96" id="title-1" />
      </div>
      <div
        className="h-screen flex bg-secondary justify-center place-items-center"
        ref={heroContainerRef}>
        {animationComplete && (
          <div
            className="relative flex w-full h-[100vh] flex-wrap"
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
                className="h-full flex items-center flex-col justify-center p-1px] ">
                <h1 className="md:text-6xl lg:text-7xl text-7xl ml-2 font-poppins md:ml-12 md:leading-tight leading-normal lg:leading-tight text-green-950 animate-moveUp">
                  Glowing expert for your <br /> beautiful healthy skin
                </h1>
                <button type="button" ref={heroContainerRef} className="bg-primary flex  hover:bg-primary text-secondary hover:text-secondary border border-green-800 rounded-full my-5 mx-2 px-12 py-4  animate-moveUp-btn">
                  <a href="/">Shop now</a>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
