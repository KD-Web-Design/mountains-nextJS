import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full p-6 max-w-5xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>Are the pictures free of rights ?</AccordionTrigger>
        <AccordionContent>
          Yes. All pictures comes from Pixabay.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is this app powered by Next.JS ?</AccordionTrigger>
        <AccordionContent>
          Yes. Along with Typescript and TailwindCSS.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is there a dark mode ?</AccordionTrigger>
        <AccordionContent>
          Of course, take a look at the upper right corner.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
