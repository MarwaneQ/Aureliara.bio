import React from "react";
import Navbar from "../components/navbar";
import Single from "../components/Single";
import productOne from "../assets/acied slyisalic.png";
import productTwo from "../assets/mockup-Pacdora-2.png";
import productThree from "../assets/mockup-Pacdora-3.png";
import productFour from "../assets/mockup-Pacdora-4.png";
import productFive from "../assets/niacinamid-zinc.jpeg";
import productSix from "../assets/mockup-Pacdora-6.png";
import productSeven from "../assets/mockup-Pacdora-7.png";
import productEight from "../assets/mockup-Pacdora-8.png";
import productNine from "../assets/mockup-Pacdora-9.png";
import productTen from "../assets/mockup-Pacdora-10.png";
import { Footer } from "../components/footer";

const products = [
  {
    image: productFive,
    name: "Niacinamide 10% & Zinc",
    price: 2600,
  },
  {
    image: productOne,
    name: "Acied Slyisalic",
    price: 2100,
  },
  {
    image: productTwo,
    name: "Vitamine C 11%",
    price: 1900,
  },

  {
    image: productThree,
    name: "Retina Glow",
    price: 2000,
  },
  {
    image: productTen,
    name: "Elixira Glow",
    price: 2700,
  },

  // {
  //   image: productSix,
  //   name: "Anti Cellulite",
  //   price: 2400,
  // },
  {
    image: productSeven,
    name: "Retinol 2%",
    price: 2600,
  },
  // {
  //   image: productEight,
  //   name: "Anti Irritation",
  //   price: 3000,
  // },
  // {
  //   image: productNine,
  //   name: "Product 3",
  //   price: 2000,
  // },
  // {
  //   image: productFour,
  //   name: "Anti Vergetures",
  //   price: 2600,
  // },
];

export default function Page() {
  return (
    <div className="bg-[#f5f5f5] ">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="p-20 text-3xl md:text-4xl ">
          <h1>Discover our Products</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {products.map((product, index) => (
            <Single
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
}
