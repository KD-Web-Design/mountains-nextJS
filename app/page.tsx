import AccordionDemo from "@/components/AccordionDemo";

import Video from "@/components/Video";
import { Spacing } from "./sommets/components/Spacing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="min-h-screen mx-auto ">
        <Video />
        <Spacing size="sm" />
        <Testimonials />
        <Spacing size="sm" />
        <AccordionDemo />
        <Spacing size="sm" />
      </div>
    </>
  );
}
