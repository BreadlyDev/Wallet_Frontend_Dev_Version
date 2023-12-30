  import React, { useEffect, useRef } from "react";
  import { createChart, IChartApi, ISeriesApi } from "lightweight-charts";

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
        (a, b) => a.time - b.time
      );
      
      if (chartContainerRef.current) {
        chart = createChart(chartContainerRef.current, {
          width: 800,
          height: 600,
        });

        const formattedData: any = sortedData.map((el) => ({
          time: el.time,
          value: el.value,
        }));
        const lineSeries: ISeriesApi<"Line"> = chart.addLineSeries();

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

  export default Chart;
