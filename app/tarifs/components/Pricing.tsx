import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../components/ui/card";
import { Check } from "lucide-react";
import ShineBorder from "@/components/ui/shine-border";

const Pricing: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-4 max-w-screen-lg mx-auto h-[30rem]">
      <Card className="w-full md:w-1/3 h-full transform transition-transform duration-300 hover:scale-105">
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
                <Check className="inline-block mr-2" /> Accès aux
                fonctionnalités de base
              </li>
              <li>
                <Check className="inline-block mr-2" /> Support par email
              </li>
              <li>
                <Check className="inline-block mr-2" /> 5 Go de stockage
              </li>
            </ul>
          </CardContent>
        </ShineBorder>
      </Card>
      <Card className="w-full h-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
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
                <Check className="inline-block mr-2" /> Accès à toutes les
                fonctionnalités
              </li>
              <li>
                <Check className="inline-block mr-2" /> Support prioritaire
              </li>
              <li>
                <Check className="inline-block mr-2" /> 50 Go de stockage
              </li>
              <li>
                <Check className="inline-block mr-2" /> Accès aux nouvelles
                fonctionnalités en avant-première
              </li>
            </ul>
          </CardContent>
        </ShineBorder>
      </Card>
    </div>
  );
};

export default Pricing;
