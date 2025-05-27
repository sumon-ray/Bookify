"use client";

import React from "react";
import { Area, AreaChart, CartesianGrid } from "recharts";
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
    ChartLegend,
    ChartLegendContent,
} from "@/Components/ui/Chart";

const CustomerSatisfaction = ({ totalReviews }) => {
    // console.log(totalReviews);
    // Function to calculate total good and bad reviews using optional chaining and map
    const calculateTotals = (reviews) => {
        let totalGood = 0;
        let totalBad = 0;

        reviews?.map((review) => {
            if (review.rating >= 4) {
                totalGood += 1; 
            } else if (review.rating <= 3) {
                totalBad += 1; 
            }
            return null; // return null to satisfy the map function
        });
        // console.log(reviews, totalGood, totalBad);
        return [
            { type: "Good", count: totalGood },
            { type: "Bad", count: totalBad },
        ];
    };

    const chartData = calculateTotals(totalReviews);

    const chartConfig = {
        good: {
            label: "Good",
            color: "hsl(var(--chart-2))",
        },
        bad: {
            label: "Bad",
            color: "hsl(var(--chart-1))",
        },
    };

    return (
        <Card className="shadow-none border-none rounded-xl">
            <CardHeader className="items-start pb-0 font-bold">
                <CardTitle className="font-bold">Users Satisfaction</CardTitle>
                <CardDescription>Total Reviews</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="max-h-[250px]">
                    <AreaChart
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="count"
                            name={chartConfig.good.label}
                            fill={chartConfig.good.color}
                            fillOpacity={0.4}
                            stroke={chartConfig.good.color}
                            type="natural"
                            stackId="a"
                        />
                        <Area
                            dataKey="count"
                            name={chartConfig.bad.label}
                            fill={chartConfig.bad.color}
                            fillOpacity={0.4}
                            stroke={chartConfig.bad.color}
                            type="natural"
                            stackId="a"
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default CustomerSatisfaction;
