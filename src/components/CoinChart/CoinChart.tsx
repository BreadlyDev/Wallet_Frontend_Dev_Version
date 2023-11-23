import {useEffect, useState} from 'react';

interface CoinChart {
    id: string;
    s: string; // Название
    c: number; // Цена
}

const CoinChart = () => {
    const [dataList, setDataList] = useState<any[]>([]);

    useEffect(() => {
        const socket = new WebSocket('wss://wallet-dev-server-dev-sqsk.2.ie-1.fl0.io/prices/?coin_name=BTCUSDT');
        socket.onmessage = (event) => {
            const receivedData = JSON.parse(event.data);
            setDataList([receivedData]);
        };
        return () => {
            socket.close();
        };
    }, []);

    let trade: any;
    trade = dataList.map((item, index) => {
        const {E, c, s} = JSON.parse(item);
        const newData = {E, c, s};
        const timestamp = newData.E
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const formattedDateTime = ` ${hours}:${minutes}:${seconds}`;

        return (
            <ul key={index}>
                <h2>name: {newData.s}</h2>
                <li>time : {formattedDateTime}</li>
                <li>price :{newData.c}</li>
            </ul>
        );
    });


    return (
        <div>
            <h1>WebSocket Data Display</h1>
            <div style={{color: "white"}}>
                {trade}
            </div>
        </div>
    );
};

export default CoinChart;


