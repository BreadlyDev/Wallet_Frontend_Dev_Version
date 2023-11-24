// import React from 'react';
// import { Line } from 'react-chartjs-2';
//
// interface ChartProps {
//     data: any[]; // Тип данных для графика
// }
//
// const ChartComponent: React.FC<ChartProps> = (props) => {
//     const { data } = props;
//
//     // Массив данных для графика
//     const chartData = {
//         labels: data.map((item) => item.time), // Метки на оси X
//         datasets: [
//             {
//                 label: 'Price',
//                 data: data.map((item) => ({ x: item.time, y: item.value })), // Значения на оси Y
//                 fill: false,
//                 borderColor: 'rgb(75, 192, 192)',
//                 tension: 0.1,
//             },
//         ],
//     };
//
//     const chartOptions: ChartProps = {
//         data: {
//             datasets: [
//                 {
//                     label: 'My Dataset',
//                     data: [],
//                     fill: false,
//                     borderColor: 'rgb(75, 192, 192)',
//                     tension: 0.1,
//                 },
//             ],
//         },
//         options: {
//             scales: {
//                 x: {
//                     type: 'time',
//                     time: {
//                         tooltipFormat: 'll HH:mm:ss',
//                         unit: 'day',
//                         displayFormats: {
//                             day: 'YYYY-MM-DD',
//                         },
//                     },
//                     title: {
//                         display: true,
//                         text: 'Date',
//                     },
//                 },
//                 y: {
//                     title: {
//                         display: true,
//                         text: 'Value',
//                     },
//                 },
//             },
//         },
//     };
//
// // Используйте объект `chartOptions` как опции для вашего графика
//
//     return (
//         <div>
//             <h2>Trade Chart</h2>
//             <Line data={chartData} options={chartOptions} />
//         </div>
//     );
// };
//
// export default ChartComponent;
