"use client";

import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, TooltipProps, XAxis } from "recharts";

interface MountainData {
  mountain: string;
  location: string;
  altitude: number;
}

const chartData: MountainData[] = [
  { mountain: "Kilimanjaro", location: "Tanzania", altitude: 5895 },
  { mountain: "Mont Fuji", location: "Japan", altitude: 3776 },
  { mountain: "Everest", location: "Nepal/China", altitude: 8849 },
  {
    mountain: "Mont Cervin",
    location: "Switzerland/Italia",
    altitude: 4478,
  },
  { mountain: "Ama Dablam", location: "Nepal", altitude: 6812 },
  { mountain: "Kirkjufell", location: "Iceland", altitude: 463 },
  { mountain: "Mont Blanc", location: "France", altitude: 4809 },
];

const chartConfig = {
  location: {
    label: "Location",
    color: "#2563eb",
  },
  altitude: {
    label: "Altitude",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipProps<number, string>["payload"];
  label?: string;
}

// Creation d'un custom tooltip

const CustomToolTipContent: React.FC<CustomTooltipProps> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">{data.mountain}</p>
          <div className="flex justify-between gap-2">
            <span className="text-xs text-muted-foreground">Location</span>
            <span className="text-xs font-medium text-foreground">
              {data.location}
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-xs text-muted-foreground">Altitude</span>
            <span className="text-xs font-medium text-foreground">
              {data.altitude} m
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function Chart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] max-w-5xl mx-auto"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="mountain"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<CustomToolTipContent />} />
        <Bar dataKey="altitude" fill="var(--color-altitude)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
