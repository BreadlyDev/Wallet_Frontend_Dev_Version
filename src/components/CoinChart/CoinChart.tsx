import { useEffect, useState, useContext } from "react";
import Chart from "./Chart";
import { useParams } from "react-router-dom";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

interface ICoinChart {
  s: string;
  c: number;
  E: string;
}

const CoinChart = () => {
  const [dataList, setDataList] = useState<ICoinChart[]>([]);
  const [dataFullList, setDataFullList] = useState<ICoinChart[]>([]);
  const params = useParams();
  const { coinStore } = useContext(Context).stores;
  useEffect(() => {
    const socket = new WebSocket(
      `wss://wallet-dev-server-dev-sqsk.2.ie-1.fl0.io/prices/?coin_name=${params.id}USDT`
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
  // console.log(dataFullList);

  const trade = dataFullList.map((item) => {
    //@ts-ignore
    const parsedItem = JSON.parse(item);
    const { E, c } = parsedItem;
    const value = Number(c);
    const timestamp = Number(E);
    const a = { time: timestamp, value };

    return a;
  });

  return (
    <div>
      <h1>WebSocket Data Display</h1>
      <div>{coinStore.price}$</div>
      <div style={{ color: "white" }}>
        <Chart data={trade} />
      </div>
    </div>
  );
};

export default observer(CoinChart);
