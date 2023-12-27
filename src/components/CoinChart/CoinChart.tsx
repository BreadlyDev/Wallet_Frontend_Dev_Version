import { useEffect, useState } from "react";
import Chart from "./Chart";
import { useParams } from "react-router-dom";


const CoinChart = () => {
  const [dataList, setDataList] = useState<string[]>([]);
  // const [dataFullList, setDataFullList] = useState<string[]>([]);

  const params = useParams();

  useEffect(() => {
    const socket = new WebSocket(
      `ws://192.168.0.102:8080/ws/coin/price/?currency=${params.id}USDT`
    );

    const handleSocketMessage = (event: MessageEvent) => {
      try {
        const receivedData: string = JSON.parse(event.data);
        setDataList((prevDataList) => [...prevDataList, receivedData]);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };

    socket.addEventListener("message", handleSocketMessage);

    return () => {
      socket.removeEventListener("message", handleSocketMessage);
      socket.close();
    };
  }, [params.id]);

  // useEffect(() => {
  //   setDataFullList((prevDataFullList) => {
  //     const updatedDataList = [...prevDataFullList, ...dataList];
  //     const maxLength = 100;
  //     if (updatedDataList.length > maxLength) {
  //       return updatedDataList.slice(updatedDataList.length - maxLength);
  //     }

  //     return updatedDataList;
  //   });
  // }, [dataList]);
  
  const trade = dataList.map((item) => {
    const newItem = item.replace(new RegExp("'", 'g'), '"')
    const objItem = JSON.parse(newItem)
    const {price, time} =  objItem    
    const value = Number(price);
    const timestamp = Number(time);
    return { time: timestamp, value };
  });
  // console.log(trade);
  
  return (
    <div>
      <div style={{ color: "white" }}>
        <Chart data={trade} />
      </div>
    </div>
  );
};

export default CoinChart;
