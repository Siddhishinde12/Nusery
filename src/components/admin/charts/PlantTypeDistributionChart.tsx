'use client';

import { TrendingUp } from 'lucide-react';
import { Pie, PieChart, Cell } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { plants } from '@/lib/data';
import { useMemo } from 'react';

const PlantTypeDistributionChart = () => {
  const chartData = useMemo(() => {
    const typeCounts = plants.reduce((acc, plant) => {
      acc[plant.type] = (acc[plant.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.keys(typeCounts).map((type) => ({
      name: type,
      value: typeCounts[type],
    }));
  }, []);

  const chartConfig = useMemo(() => {
    const config: any = {};
    chartData.forEach((item, index) => {
      config[item.name] = {
        label: item.name,
        color: `hsl(var(--chart-${index + 1}))`,
      };
    });
    return config;
  }, [chartData]);


  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square h-[250px]"
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent nameKey="value" />} />
        <Pie data={chartData} dataKey="value" nameKey="name" innerRadius={60}>
            {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chartConfig[entry.name].color} />
            ))}
        </Pie>
         <ChartLegend
          content={<ChartLegendContent nameKey="name" />}
          className="-translate-y-[2rem] flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
        />
      </PieChart>
    </ChartContainer>
  );
};

export default PlantTypeDistributionChart;
