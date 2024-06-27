import Image from "next/image";
import Preload from "./components/preload";
import Product from "./components/product";
import About from "./components/about";
export default function Home() {
  return (
    <>
        <Preload />
        <Product />
        <About /> 
    </>
  );
}
