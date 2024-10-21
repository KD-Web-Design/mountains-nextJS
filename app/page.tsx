import AccordionDemo from "@/components/AccordionDemo";
import AlertHandler from "@/components/AlertHandler";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center ">
        <Hero />
        <AlertHandler />
        <AccordionDemo />
      </div>
    </>
  );
}
