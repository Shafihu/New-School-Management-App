"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DropdownMenuDemo } from "@/components/DropdownMenu";
const chartData = [
  { browser: "chrome", value: 275, fill: "var(--color-chrome)" },
  { browser: "safari", value: 200, fill: "var(--color-safari)" },
];

const noMales = chartData[0].value;
const noFemales = chartData[1].value;
const total = noMales + noFemales;

const malePercent = (noMales / total) * 100;
const femalePercent = (noFemales / total) * 100;

const chartConfig = {
  value: {
    label: "Total",
  },
  chrome: {
    label: "Male Students",
    color: "#2563eb",
    percent: malePercent.toFixed(0),
  },
  safari: {
    label: "Female Students",
    color: "#fe784a",
    percent: femalePercent.toFixed(0),
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <Card className="flex flex-col p-4 min-h-full">
      <CardHeader className="pb-0 flex items-center justify-between">
        <CardTitle className="text-lg font-semibold">Students</CardTitle>
        <DropdownMenuDemo from="students" />
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend content={<ChartLegendContent type="pie" />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="browser"
              innerRadius={50}
              strokeWidth={8}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-[#E0E0E0]"
                        >
                          Total
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl font-semibold"
                        >
                          100%
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
