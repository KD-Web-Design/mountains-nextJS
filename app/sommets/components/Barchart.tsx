import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, TooltipProps, XAxis } from "recharts";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface MountainData {
  mountain: string;
  location: string;
  altitude: number;
  prominence: number;
  isFavorite?: boolean;
}

const chartData: MountainData[] = [
  {
    mountain: "Kilimanjaro",
    location: "Tanzanie",
    altitude: 5895,
    prominence: 5885,
  },
  {
    mountain: "Fuji",
    location: "Japon",
    altitude: 3776,
    prominence: 3776,
  },
  {
    mountain: "Everest",
    location: "Népal/Chine",
    altitude: 8849,
    prominence: 8848,
  },
  {
    mountain: "Cervin",
    location: "Suisse/Italie",
    altitude: 4478,
    prominence: 1040,
  },
  {
    mountain: "Ama Dablam",
    location: "Népal",
    altitude: 6812,
    prominence: 1041,
  },
  {
    mountain: "Kirkjufell",
    location: "Islande",
    altitude: 463,
    prominence: 449,
  },
  {
    mountain: "Blanc",
    location: "France",
    altitude: 4809,
    prominence: 4696,
    isFavorite: true,
  },
];

const chartConfig = {
  altitude: {
    label: "Altitude",
    color: "#2563eb",
  },
  prominence: {
    label: "Proéminence",
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
            <span className="text-xs text-muted-foreground">Lieu</span>
            <span className="text-xs font-medium text-foreground">
              {data.location}
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-xs text-muted-foreground">
              <span
                className="inline-block w-2 h-2  mr-1"
                style={{ backgroundColor: chartConfig.altitude.color }}
              ></span>
              Altitude
            </span>
            <span className="text-xs font-medium text-foreground">
              {data.altitude} m
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-xs text-muted-foreground">
              <span
                className="inline-block w-2 h-2 mr-1"
                style={{ backgroundColor: chartConfig.prominence.color }}
              ></span>
              Proéminence
            </span>
            <span className="text-xs font-medium text-foreground">
              {data.prominence} m
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
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Altitude et Proéminence</CardTitle>
      </CardHeader>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] lg:min-h-[400px] max-w-3xl mx-auto"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="mountain"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<CustomToolTipContent />} />
          <Bar dataKey="altitude" fill="var(--color-altitude)" radius={4} />
          <Bar dataKey="prominence" fill="var(--color-prominence)" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  );
}
