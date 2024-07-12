"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import Image from "next/image";
import logo from "../assets/logo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const circleRef = useRef(null);
  const menuItemsRef = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    if (isOpen) {
      gsap.to(circleRef.current, {
        duration: 0.8,
        scale: 50,
        ease: "power2.inOut",
      });
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.3,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    } else {
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(circleRef.current, {
            duration: 0,
            scale: 0,
            ease: "power2.inOut",
          });
        },
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="  top-7 w-full bg-transparent text-primary z-40 h-16 px-2 py-6 md:py-4 ">
      <div className="  justify-center px-4 sm:px-6 flex lg:px-8">
        <div className="flex w-full items-center justify-between h-16  md:w-[60rem]">
          <div className="flex items-center">
            <div className="text-2xl font-bold ">
              <a href="/">
                <Image src={logo} className="w-16 h-24" alt="logo" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline text-xl space-x-16">
              <a href="home" className="">
                Home
              </a>
              <a href="products" className="">
                Products
              </a>
              <a href="about" className="">
                About
              </a>
              {/* <a href="#contact" className="font-bold">
                Contact
              </a> */}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-200">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden relative">
        <div
          ref={circleRef}
          className="fixed top-0 right-0 w-20 h-20 bg-primary rounded-full transform scale-0 origin-top-right z-40"></div>
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center bg-primary transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-100 z-30" : "opacity-0 pointer-events-none"
          }`}>
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none">
            <FaTimes size={24} />
          </button>
          {["Home", "Product", "About"].map((item, index) => (
            <a
              onClick={toggleMenu}
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-gray-400 transition duration-200"
              ref={(el: HTMLElement | null) => {
                if (el) {
                  menuItemsRef.current[index] = el;
                }
              }}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
