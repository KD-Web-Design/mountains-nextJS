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
  protuberance: number;
  isFavorite?: boolean;
}

const chartData: MountainData[] = [
  {
    mountain: "Kilimanjaro",
    location: "Tanzania",
    altitude: 5895,
    protuberance: 5885,
  },
  {
    mountain: "Mont Fuji",
    location: "Japan",
    altitude: 3776,
    protuberance: 3776,
  },
  {
    mountain: "Everest",
    location: "Nepal/China",
    altitude: 8849,
    protuberance: 8848,
  },
  {
    mountain: "Mont Cervin",
    location: "Switzerland/Italia",
    altitude: 4478,
    protuberance: 1040,
  },
  {
    mountain: "Ama Dablam",
    location: "Nepal",
    altitude: 6812,
    protuberance: 1041,
  },
  {
    mountain: "Kirkjufell",
    location: "Iceland",
    altitude: 463,
    protuberance: 449,
  },
  {
    mountain: "Mont Blanc",
    location: "France",
    altitude: 4809,
    protuberance: 4696,
    isFavorite: true,
  },
];

const chartConfig = {
  altitude: {
    label: "Altitude",
    color: "#2563eb",
  },
  protuberance: {
    label: "Protuberance",
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
          <div className="flex justify-between gap-2">
            <span className="text-xs text-muted-foreground">Protuberance</span>
            <span className="text-xs font-medium text-foreground">
              {data.protuberance} m
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
    <>
      <div className="relative">
        <h1 className="text-center scroll-m-20 pb-8 text-3xl font-semibold tracking-tight first:mt-0">
          Altitude and Prominence of Major Peaks
        </h1>
        <ChartContainer
          config={chartConfig}
          className="min-h-[200px] max-w-4xl mx-auto"
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
            <Bar
              dataKey="protuberance"
              fill="var(--color-protuberance)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </>
  );
}
