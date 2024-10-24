import AccordionDemo from "@/components/AccordionDemo";

import Video from "@/components/Video";
import { Spacing } from "./mountains/components/Spacing";

export default function Home() {
  return (
    <>
      <div className="min-h-screen mx-auto ">
        <Video />
        <Spacing size="sm" />
        <AccordionDemo />
      </div>
    </>
  );
}
