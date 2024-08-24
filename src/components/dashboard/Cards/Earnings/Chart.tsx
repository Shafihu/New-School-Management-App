"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", received: 86543, pending: 39100 },
  { month: "February", received: 120305, pending: 75200 },
  { month: "March", received: 98737, pending: 46200 },
  { month: "April", received: 113073, pending: 61290 },
  { month: "May", received: 93009, pending: 70130 },
  { month: "June", received: 115214, pending: 84340 },
  { month: "July", received: 102114, pending: 93400 },
  { month: "August", received: 119314, pending: 72950 },
  { month: "September", received: 107914, pending: 81340 },
  { month: "October", received: 126314, pending: 69210 },
  { month: "November", received: 98014, pending: 83560 },
  { month: "December", received: 111214, pending: 76430 },
];

const chartConfig = {
  received: {
    label: "Received payments",
    color: "#2563eb",
  },
  pending: {
    label: "Pending payments",
    color: "#E0E0E0",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <ChartContainer config={chartConfig} className="h-60 w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent type="bar" />} />
        <ChartLegend content={<ChartLegendContent type="bar" />} />
        <Bar
          dataKey="received"
          fill="var(--color-received)"
          radius={12}
          barSize={12}
        />
        <Bar
          dataKey="pending"
          fill="var(--color-pending)"
          radius={10}
          barSize={10}
        />
      </BarChart>
    </ChartContainer>
  );
}
