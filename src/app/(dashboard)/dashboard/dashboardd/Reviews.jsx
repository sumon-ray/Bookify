"use client";

import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/Card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/Chart";

// Reviews component
const Reviews = ({ totalReview }) => {

  const getChartData = (reviews) => {
    const chartData = [
      { month: "Current", good: 0, bad: 0 }, 
    ];

   
    reviews?.forEach((review) => {
      if (review.rating >= 4) {
        chartData[0].good += 1; 
      } else if (review.rating <= 3) {
        chartData[0].bad += 1; 
      }
    });

    return chartData;
  };

  const chartData = getChartData(totalReview);

  const chartConfig = {
    good: {
      label: "Good",
      color: "hsl(var(--chart-1))",
    },
    bad: {
      label: "Bad",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <Card className="shadow-none border-none rounded-xl">
      <CardHeader className="items-start pb-0 font-bold">
        <CardTitle className="font-bold">Total Reviews</CardTitle>
        <CardDescription>Current Month</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[252px]">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <Tooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="good" fill={chartConfig.good.color} radius={4} />
            <Bar dataKey="bad" fill={chartConfig.bad.color} radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Reviews;
