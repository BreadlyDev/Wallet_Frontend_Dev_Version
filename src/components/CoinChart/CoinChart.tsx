import { useEffect, useState } from "react";
import Chart from "./Chart";
import { useParams } from "react-router-dom";

interface ICoinChart {
  s: string;
  c: number;
  E: string;
}

const CoinChart = () => {
  const [dataList, setDataList] = useState<ICoinChart[]>([]);
  const [dataFullList, setDataFullList] = useState<ICoinChart[]>([]);
  const params: any = useParams();
  const authToken = localStorage.getItem("access"); // Replace with your actual authentication token

  useEffect(() => {
    const socket = new WebSocket(
      `wss://wallet-dev-server-dev-sqsk.2.ie-1.fl0.io/api/v1/wallet/ws/coin/price/get/?currency=${params.id}USDT&token=${authToken}`
    );

    const handleSocketMessage = (event: MessageEvent) => {
      const receivedData: ICoinChart = JSON.parse(event.data);
      setDataList((prevDataList) => [...prevDataList, receivedData]);
    };

    socket.addEventListener("message", handleSocketMessage);

    return () => {
      socket.removeEventListener("message", handleSocketMessage);
      socket.close();
    };
  }, [params.id, authToken]);

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
    return { time: timestamp, value };
  });

  return (
    <div>
      <div style={{ color: "white" }}>
        <Chart data={trade} />
      </div>
    </div>
  );
};

export default CoinChart;
