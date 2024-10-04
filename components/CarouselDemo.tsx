import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo() {
  const images = [
    { id: 1, src: "/images/himalaya-409.jpg", title: "Ama Dablam" },
    { id: 2, src: "/images/matterhorn-4285605.jpg", title: "Mont Cervin" },
    { id: 3, src: "/images/mont-blanc-1527997.jpg", title: "Mont Blanc" },
    { id: 4, src: "/images/mount-fuji-8010752.jpg", title: "Mont Fuji" },
    { id: 5, src: "/images/tibet-4025999.jpg", title: "Everest" },
  ];
  return (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={image.src}
                    alt={image.title}
                    layout="responsive"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover rounded"
                  />
                </CardContent>
                <p className="pb-6 text-center text-lg font-semibold">
                  {image.title}
                </p>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
