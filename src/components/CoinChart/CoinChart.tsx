import { useEffect, useState } from "react";
import Chart from "./Chart";
import { useParams } from "react-router-dom";

const CoinChart = () => {
  const [dataList, setDataList] = useState<any[]>([]);

  const params = useParams();

  useEffect(() => {
    const socket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${(params.id)?.toLowerCase()}usdt@miniTicker`
    );

    const handleSocketMessage = (event: MessageEvent) => {

      try {

        const receivedData:any = JSON.parse(event.data);
        setDataList((prevDataList) => [...prevDataList, receivedData]);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };

    socket.addEventListener("message", (e)=>handleSocketMessage(e));
  }, [params.id]);

  const trade = dataList.map((item) => {
    // const newItem = item.replace(new RegExp("'", "g"), '"');
    // const objItem = JSON.parse(String(newItem));
    const { c, E } = item;
    const value = Number(c);
    const time = Number(E);
    
    return { time, value };
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
