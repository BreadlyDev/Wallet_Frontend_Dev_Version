import {useEffect, useState} from 'react';
import ChartComponent from "./ChartComponent/ChartComponent.tsx";

interface CoinChart {
    s: string;
    c: number;
    E: string;
}

const CoinChart = () => {
    const [dataList, setDataList] = useState<CoinChart[]>([]);
    const [dataFullList, setDataFullList] = useState<CoinChart[]>([]);

    useEffect(() => {
        const socket = new WebSocket('wss://wallet-dev-server-dev-sqsk.2.ie-1.fl0.io/prices/?coin_name=BTCUSDT');
        socket.onmessage = (event) => {
            const receivedData: CoinChart = JSON.parse(event.data);
            setDataList((prevDataList) => [...prevDataList, receivedData]);
        };

        return () => {
            socket.close();
        };
    }, []);

    useEffect(() => {
        setDataFullList((prevDataFullList) => {
            const updatedDataList = [...prevDataFullList, ...dataList];
            const maxLength = 100;
            if (updatedDataList.length > maxLength) {
                return updatedDataList.slice(updatedDataList.length - maxLength);
            }
            return updatedDataList;
        });
    }, [dataList]);

    const trade = dataFullList.map((item) => {
        // @ts-ignore
        const parsedItem = JSON.parse(item);
        const {E, c} = parsedItem;
        const value = Number(c);
        const timestamp = Number(E);
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const formattedDateTime = `${year}-${month}-${day}`;


        const a = {time: formattedDateTime, value};

        return a;
    });

    console.log(trade)

    // const sortedTrade = trade.sort((a, b) => {
    //     const timeA = new Date(a.time).getTime();
    //     const timeB = new Date(b.time).getTime();
    //     return timeA - timeB;
    // });
    //
    // // console.log(sortedTrade)
    // const initialData = [
    //     {time: '2018-12-22', value: 32.51},
    //     {time: '2018-12-23', value: 31.11},
    //     {time: '2018-12-24', value: 27.02},
    //     {time: '2018-12-25', value: 27.32},
    //     {time: '2018-12-26', value: 25.17},
    //     {time: '2018-12-27', value: 28.89},
    //     {time: '2018-12-28', value: 25.46},
    //     {time: '2018-12-29', value: 23.92},
    //     {time: '2018-12-30', value: 22.68},
    //     {time: '2018-12-31', value: 22.67},
    // ];


    const tet = [
        { time: '2023-11-24', value: 37387 },
        { time: '2023-11-21', value: 38387.01 },
        { time: '2023-11-22', value: 37387.02 },
        { time: '2023-11-20', value: 31387 },
        { time: '2023-11-14', value: 37387.05 },
        { time: '2023-11-23', value: 33387 },
        { time: '2023-11-14', value: 35387.01 },
        { time: '2023-11-29', value: 37387.02 },
        { time: '2023-11-17', value: 30387.03 },
        { time: '2023-11-17', value: 37387 },
        { time: '2023-11-17', value: 37387.01 },
    ];

    const sortedTet = tet.sort((a, b) => {
        const dateA = new Date(a.time).getTime();
        const dateB = new Date(b.time).getTime();
        return dateA - dateB;
    });

    console.log(sortedTet)
    return (
        <div>
            <h1>WebSocket Data Display</h1>
            <div style={{color: 'white'}}>
                <ChartComponent data={trade}/>
            </div>
        </div>
    );
};

export default CoinChart;
