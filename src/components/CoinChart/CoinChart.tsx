import { useEffect, useState } from "react";
import Chart from "./Chart";

interface ICoinChart {
  s: string;
  c: number;
  E: string;
}

const CoinChart = () => {
  const [dataList, setDataList] = useState<ICoinChart[]>([]);
  const [dataFullList, setDataFullList] = useState<ICoinChart[]>([]);

  useEffect(() => {
    const socket = new WebSocket(
      "wss://wallet-dev-server-dev-sqsk.2.ie-1.fl0.io/prices/?coin_name=ETHUSDT"
    );
    socket.onmessage = (event) => {
      const receivedData: ICoinChart = JSON.parse(event.data);
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
    const { E, c } = item;
    const value = Number(c);
    const timestamp = Number(E);
    const a = { time: timestamp, value };

    return a;
  });

  return (
    <div>
      <h1>WebSocket Data Display</h1>
      <div style={{ color: "white" }}>
        <Chart data={trade} />
      </div>
    </div>
  );
};

export default CoinChart;
