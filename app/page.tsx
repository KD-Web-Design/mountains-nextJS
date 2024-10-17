import AccordionDemo from "@/components/AccordionDemo";
import AlertHandler from "@/components/AlertHandler";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center ">
        <AlertHandler />
        <AccordionDemo />
      </div>
    </>
  );
}
