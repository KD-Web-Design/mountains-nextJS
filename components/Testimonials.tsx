"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { MagicCard } from "./ui/magic-card";
import { useTheme } from "next-themes";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mike Horn",
    role: "Aventurier et explorateur",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/DmitrySharomov20161208-4023.jpg",
    text: "Les montagnes ne sont pas seulement des masses de roches, elles sont des lieux de défis, de découvertes et de dépassement de soi.",
  },
  {
    id: 2,
    name: "Gerlinde Kaltenbrunner",
    role: "Exploratrice et alpiniste",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/2015_Gerlinde_Kaltenbrunner_%28cropped%29.jpg",
    text: "La nature, dans sa splendeur sauvage, offre un refuge apaisant et un rappel constant de la beauté authentique du monde.",
  },
  {
    id: 3,
    name: "Bear Grylls",
    role: "Alpiniste et aventurier",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Coventry_Scouts_groups_have_a_visit_from_Bear_Grylls.jpg/1200px-Coventry_Scouts_groups_have_a_visit_from_Bear_Grylls.jpg",
    text: "L'Everest, sommet emblématique, incarne la grandeur naturelle et le défi ultime de l'exploration humaine.",
  },
];

export default function Testimonials() {
  const { theme } = useTheme();
  return (
    <section className="max-w-screen-xl mx-auto">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl p-6 ml-6">
        Quelques témoignages inspirants...
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 rounded-lg">
        {testimonials.map(({ id, name, role, image, text }) => (
          <MagicCard
            key={id}
            className=" bg-gray-100 dark:bg-gray-900 text-white"
            gradientColor={theme === "dark" ? "#4B5563" : "#d1d5db"}
          >
            <div className="flex flex-col h-full">
              <CardContent className="p-6 flex-grow">
                <div className="text-black dark:text-white text-4xl mb-4">
                  “
                </div>
                <p className="text-black dark:text-white text-lg font-light">
                  {text}
                </p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4 mt-auto">
                <Image
                  src={image}
                  alt={name}
                  width={128}
                  height={128}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-black dark:text-white font-semibold">
                    {name}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {role}
                  </p>
                </div>
              </CardFooter>
            </div>
          </MagicCard>
        ))}
      </div>
    </section>
  );
}
