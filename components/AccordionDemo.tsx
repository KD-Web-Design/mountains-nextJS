import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-screen-xl mx-auto p-6"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Les photos et vidéos sont elles libre de droits ?
        </AccordionTrigger>
        <AccordionContent>
          Oui. Toutes les photos et vidéos proviennent de Pixabay et Pexels.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Cette application utilise t-elle Next.JS ?
        </AccordionTrigger>
        <AccordionContent>
          Oui. Ainsi que TailwindCSS et TypeScript.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Y&apos;a t-il un dark mode ?</AccordionTrigger>
        <AccordionContent>
          Bien sûr ! Cliquez sur le bouton en haut à droite.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
