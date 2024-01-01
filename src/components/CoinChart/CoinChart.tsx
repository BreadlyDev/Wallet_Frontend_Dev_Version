import { useState } from "react";
import Chart from "./Chart";
import { useParams } from "react-router-dom";

const CoinChart = () => {
  const [dataList, setDataList] = useState<any[]>([]);

  const params = useParams();

  setInterval(() => {
    const socket = new WebSocket(
      `wss://wallet-rndr.onrender.com/ws/coin/price/?currency=${params.id}USDT`
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
  }, 1000)

  const trade = dataList.map((item) => {
    const newItem = item.replace(new RegExp("'", "g"), '"');
    const objItem = JSON.parse(String(newItem));
    // console.log(objItem);
    
    const { price, time } = objItem;
    const value = Number(price);
    const time_var = Number(time);
    
    return { time:time_var, value };
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
