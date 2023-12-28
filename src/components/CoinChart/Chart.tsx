import React, { useEffect, useRef } from "react";
import { createChart, IChartApi, ISeriesApi } from "lightweight-charts";
import { observer } from "mobx-react-lite";

interface ChartProps {
  data: { time: number; value: number }[] | null;
}

const Chart: React.FC<ChartProps> = ({ data }: ChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  let chart: IChartApi | null = null;
  useEffect(() => {
    const uniqueData = Array.from(
      new Map(data?.map((item) => [item.time, item])).values()
    );

    const sortedData = uniqueData.sort(
      (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
    );

    if (chartContainerRef.current) {
      chart = createChart(chartContainerRef.current, {
        width: 800,
        height: 600,
      });

      const lineSeries: ISeriesApi<"Line"> = chart.addLineSeries();
      const formattedData: any = sortedData.map((entry) => ({
        time: entry.time,
        value: entry.value,
      }));

      lineSeries.setData(formattedData);
      return () => {
        if (chart) {
          chart.remove();
          chart = null;
        }
      };
    }
  }, [data]);

  return <div ref={chartContainerRef} />;
};

export default observer(Chart);
