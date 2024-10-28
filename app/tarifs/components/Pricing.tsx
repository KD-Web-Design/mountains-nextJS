"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../components/ui/card";
import { Check, XIcon } from "lucide-react";
import ShineBorder from "@/components/ui/shine-border";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { useToast } from "@/hooks/use-toast";

const Pricing: React.FC = () => {
  const { toast } = useToast();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-8 max-w-screen-lg mx-auto">
      <Card className="w-full md:w-1/3 h-full bg-gray-100 dark:bg-gray-900 cursor-pointer">
        <ShineBorder
          color={["#C0C0C0", "#A9A9A9"]}
          borderWidth={2}
          className="h-full w-full"
        >
          <CardHeader>
            <CardTitle className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#C0C0C0] from-35% to-[#A9A9A9] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Offre Basique
            </CardTitle>
            <CardDescription>10€ / mois</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>
                <Check className="inline-block mr-2" /> Accès aux sentiers de
                randonnée
              </li>
              <li>
                <Check className="inline-block mr-2" /> Support par email
              </li>
              <li>
                <Check className="inline-block mr-2" /> 5 Go de stockage pour
                photos
              </li>
              <li>
                <XIcon className="inline-block mr-2" /> Cartes des pistes de ski
              </li>
              <li>
                <XIcon className="inline-block mr-2" /> Réductions sur les
                locations d&apos;équipement
              </li>
            </ul>
          </CardContent>
          <RainbowButton
            className="mb-6 transform transition-transform duration-300 lg:hover:scale-105"
            onClick={() => {
              toast({
                title: "Vous avez choisi l'offre Basique",
                description: "Merci pour votre confiance !",
              });
            }}
          >
            Choisir ce plan
          </RainbowButton>
        </ShineBorder>
      </Card>
      <Card className="w-full h-full md:w-1/3 bg-gray-100 dark:bg-gray-900 cursor-pointer">
        <ShineBorder
          color={["#FFD700", "#FF8C00"]}
          borderWidth={2}
          className="h-full w-full"
        >
          <CardHeader>
            <CardTitle className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#FFD700] from-35% to-[#FF8C00] bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Offre Premium
            </CardTitle>
            <CardDescription>30€ / mois</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>
                <Check className="inline-block mr-2" /> Accès aux sentiers de
                randonnée
              </li>
              <li>
                <Check className="inline-block mr-2" /> Support par email
              </li>
              <li>
                <Check className="inline-block mr-2" /> 50 Go de stockage pour
                photos
              </li>
              <li>
                <Check className="inline-block mr-2" /> Cartes des pistes de ski
              </li>
              <li>
                <Check className="inline-block mr-2" /> Réductions sur les
                locations d&apos;équipement
              </li>
            </ul>
          </CardContent>
          <RainbowButton
            className="mb-6 transform transition-transform duration-300 lg:hover:scale-105"
            onClick={() => {
              toast({
                title: "Vous avez choisi l'offre Premium",
                description: "Merci pour votre confiance !",
              });
            }}
          >
            Choisir ce plan
          </RainbowButton>
        </ShineBorder>
      </Card>
    </div>
  );
};

export default Pricing;
