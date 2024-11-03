"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
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
import axios from "axios";
import { useEffect, useState } from "react";

export const description = "A line chart";

const chartConfig = {
  lineColor: "#e76e50", // Setting the color explicitly
};

const Visitor = () => {
  const [chartData, setChartData] = useState([]);

  // Fetch data and transform it for the chart
  useEffect(() => {
    const dashboardData = async () => {
      try {
        const response = await axios.get(
          "https://bookify-server-lilac.vercel.app/users"
        );
        const fetchedUsers = response.data;

        // Create an object to hold user names by month
        const monthlyUsers = {};

        // Transform fetched data into monthly user data
        fetchedUsers.forEach((user) => {
          // Ensure user has name and createdAt properties
          if (user.name && user.createdAt) {
            const month = new Date(user.createdAt).toLocaleString('default', { month: 'long' });
            if (!monthlyUsers[month]) {
              monthlyUsers[month] = { names: [], count: 0 };
            }
            monthlyUsers[month].names.push(user.name); // Store user names
            monthlyUsers[month].count++; // Count users
          }
        });

        // Convert the object to an array for the chart
        const transformedData = Object.keys(monthlyUsers).map((month) => ({
          month: month,
          value: monthlyUsers[month].count,
          names: monthlyUsers[month].names.join(", "), // Join names into a string for tooltip
        }));

        setChartData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    dashboardData();
  }, []);

  return (
    <div className="text-black rounded-xl   ">
      <Card className="shadow-none border-none rounded-xl ">
        <CardHeader className="items-start pb-0 font-bold">
          <CardTitle className="font-bold">New Users</CardTitle>
          <CardDescription>2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="max-h-[250px]">
            <LineChart
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
                formatter={(value, name, props) => [
                  `Count: ${value}`, // Show count in tooltip
                  // `Users: ${props.payload[0].payload.names}`, // Show user names in tooltip
                ]}
              />
              <Line
                dataKey="value"
                type="natural"
                stroke={chartConfig.lineColor}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Visitor;
