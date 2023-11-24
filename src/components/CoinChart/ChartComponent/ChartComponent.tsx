    import { createChart, ColorType, ISeriesApi } from 'lightweight-charts';
    import React, { useEffect, useRef } from 'react';

    interface ChartProps {
        data: { time: string; value: number }[]; // Тип данных для графика
        colors?: {
            backgroundColor?: string;
            lineColor?: string;
            textColor?: string;
            areaTopColor?: string;
            areaBottomColor?: string;
        };
    }

    const ChartComponent: React.FC<ChartProps> = (props) => {
        const {
            data,
            colors: {
                backgroundColor = 'white',
                lineColor = '#2962FF',
                textColor = 'black',
                areaTopColor = '#2962FF',
                areaBottomColor = 'rgba(41, 98, 255, 0.28)',
            } = {},
        } = props;

        const chartContainerRef = useRef<HTMLDivElement>(null);
        let chart: any; // Тип lightweight-charts Chart API

        useEffect(() => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current?.clientWidth });
            };

            if (chartContainerRef.current) {
                chart = createChart(chartContainerRef.current, {
                    layout: {
                        background: { type: ColorType.Solid, color: backgroundColor },
                        textColor,
                    },
                    width: chartContainerRef.current.clientWidth,
                    height: 300,
                });
                chart.timeScale().fitContent();

                const newSeries: ISeriesApi<'Area'> = chart.addAreaSeries({
                    lineColor,
                    topColor: areaTopColor,
                    bottomColor: areaBottomColor,
                });

                // Отсортировать данные по времени перед передачей их в график
                const pointsMap = new Map<number, number>();
                data.forEach(({ time, value }) => {
                    const timestamp = new Date(time).getTime();
                    pointsMap.set(timestamp, value);
                });

                // Создать массив объектов точек данных
                const sortedData = Array.from(pointsMap.entries()).map(([timestamp, value]) => ({
                    time: new Date(timestamp).toISOString().slice(0, 10),
                    value,
                }));

                newSeries.setData(sortedData);

                window.addEventListener('resize', handleResize);

                return () => {
                    window.removeEventListener('resize', handleResize);
                    chart.remove();
                };
            }
        }, [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

        return <div ref={chartContainerRef} />;
    };

    export default ChartComponent;
