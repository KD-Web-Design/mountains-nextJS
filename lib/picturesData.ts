import AmaDablam from "../public/images/ama-dablam.jpg";
import MountFuji from "../public/images/mount-fuji.jpg";
import MontCervin from "../public/images/mont-cervin.jpg";
import Everest from "../public/images/everest.jpg";
import Kilimanjaro from "../public/images/kilimanjaro.jpg";
import Kirkjufell from "../public/images/kirkjufell.jpg";
import MontBlanc from "../public/images/mont-blanc.jpg";
import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";

// Déclaration du type pour le tableau (facultatif mais recommandé en TypeScript)
export interface PictureData {
  src: StaticImageData;
  scale: MotionValue<number>;
}

// Fonction pour créer le tableau `pictures`, en recevant les échelles de transformation
export const createPicturesData = (
  scale4: MotionValue<number>,
  scale5: MotionValue<number>,
  scale6: MotionValue<number>,
  scale8: MotionValue<number>,
  scale9: MotionValue<number>
): PictureData[] => {
  return [
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
};
