"use client";

import React, { useRef } from "react";
import Image from "next/image";
import AmaDablam from "../../../public/images/ama-dablam.jpg";
import MountFuji from "../../../public/images/mount-fuji.jpg";
import MontCervin from "../../../public/images/mont-cervin.jpg";
import Everest from "../../../public/images/everest.jpg";
import Kilimanjaro from "../../../public/images/kilimanjaro.jpg";
import Kirkjufell from "../../../public/images/kirkjufell.jpg";
import MontBlanc from "../../../public/images/mont-blanc.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import "../../2/components/parallax.css";

export default function Parallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: MountFuji,
      scale: scale4,
    },
    {
      src: MontBlanc,
      scale: scale5,
    },
    {
      src: AmaDablam,
      scale: scale6,
    },
    {
      src: MontCervin,
      scale: scale5,
    },
    {
      src: Kirkjufell,
      scale: scale6,
    },
    {
      src: Kilimanjaro,
      scale: scale8,
    },
    {
      src: Everest,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              style={{ scale }}
              key={index}
              className="el w-full h-full absolute top-0 flex items-center justify-center"
            >
              <div className="imageContainer w-[25vw] h-[25vh] relative">
                <Image
                  className="object-cover"
                  src={src}
                  fill
                  alt="mountain"
                  placeholder="blur"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
