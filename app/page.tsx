import AccordionDemo from "@/components/AccordionDemo";

import Hero from "@/components/Hero";
import { Spacing } from "./mountains/components/Spacing";

export default function Home() {
  return (
    <>
      <div className="min-h-screen max-w-screen-xl mx-auto ">
        <Spacing size="lg" />
        <Hero />
        <AccordionDemo />
      </div>
    </>
  );
}
