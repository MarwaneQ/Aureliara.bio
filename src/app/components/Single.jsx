import React from "react";
import Image from "next/image"; 

export default function Single({ image, name, price }) {
  return (
    <div className="max-w-xs mx-auto border rounded-md p-4 shadow-sm bg-[#f8f5f3]">
      <Image
        src={image}
        alt={name}
        width={300}
        height={400} 
        className="w-full h-64 object-cover mb-4 rounded-md"
      />
      <h2 className="text-lg font-medium text-center mb-2">{name}</h2>
      <span className="block text-center text-xl  text-neutral-800 mb-2">
        {price} DA
      </span>
      <button className="block w-full text-white bg-primary py-2 rounded-md font-medium hover:bg-transparent hover:text-primary border transition border-primary hover:border ">
        Add to cart 
      </button>
    </div>
  );
}
