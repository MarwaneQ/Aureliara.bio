"use client";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Hero from "./hero";
import Image from "next/image";
import landing from "../assets/landing.jpeg";
import aur from "../assets/secondary.png";
import Navbar from "./navbar";
import ScrollDownButton from "./scrolldownbutton";
export default function App() {
  const comp = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const heroContainer = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          setAnimationComplete(true); // Update state on animation complete
          // Fade in the hero container
          gsap.fromTo(heroContainer.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
        },
      });

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
    <section className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-primary absolute top-0 left-0  z-10 w-full flex flex-col justify-center items-center gap-10 tracking-tight ">
        <Image src={aur} alt="aur" className="w-96" id="title-1" />
      </div>
      <div className="h-screen flex  bg-secondary justify-center  place-items-center" ref={heroContainer}>
        {animationComplete && (
          <div className=" relative flex w-full h-[100vh] flex-wrap" id="Welcome">
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
          </div>
        )}
      </div>
    </section>
  );
}
