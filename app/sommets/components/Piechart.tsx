"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple pie chart";

const chartData = [
  { element: "sky", percentage: 75, fill: "#60a5fa" },
  { element: "sunny", percentage: 17, fill: "#f9fafb" },
  { element: "shady", percentage: 8, fill: "#9ca3af" },
];

const chartConfig = {
  sky: {
    label: "Ciel",
    color: "#60a5fa",
  },
  sunny: {
    label: "Coté ensoleillé de la montagne",
    color: "#f9fafb",
  },
  shady: {
    label: "Coté ombragé de la montagne",
    color: "#9ca3af",
  },
} satisfies ChartConfig;

export function Piechart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pike Pie Chart</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart className="">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hidePercentage />}
            />
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="element"
              startAngle={225}
              endAngle={-225}
              stroke="#000000"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
