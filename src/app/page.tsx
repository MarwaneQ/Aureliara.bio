import Image from "next/image";
import Preload from "./components/preload";
import Hero from "./components/hero";
import Product from "./components/product";
import About from "./components/about";
export default function Home() {
  return (
    <main>
        <Preload />
        <Product />
         <About /> 
    </main>
  );
}
