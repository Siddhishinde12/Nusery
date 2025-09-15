'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', revenue: 18600 },
  { month: 'February', revenue: 30500 },
  { month: 'March', revenue: 23700 },
  { month: 'April', revenue: 27800 },
  { month: 'May', revenue: 29900 },
  { month: 'June', revenue: 25100 },
];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--chart-2))',
  },
};

const MonthlyRevenueChart = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart data={chartData} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
            tickFormatter={(value) => `₹${Number(value) / 1000}k`}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default MonthlyRevenueChart;
