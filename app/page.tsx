import AccordionDemo from "@/components/AccordionDemo";
import AlertHandler from "@/components/AlertHandler";
import { CarouselDemo } from "@/components/CarouselDemo";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center ">
        <CarouselDemo />
        <AlertHandler />
        <AccordionDemo />
      </div>
    </>
  );
}
