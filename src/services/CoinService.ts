export interface ICoinChart {
  id: string;
  s: string; // Название
  c: number; // Цена
}

export class CoinService {
  private static readonly socketURL =
    "wss://wallet-dev-server-dev-sqsk.2.ie-1.fl0.io/prices/?coin_name=BTCUSDT";

  private static connectWebSocket(): WebSocket {
    const socket = new WebSocket(this.socketURL);
    socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      const newData = {
        E: receivedData.E,
        c: receivedData.c,
        s: receivedData.s,
      };
      const timestamp = newData.E;
      const date = new Date(timestamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const formattedDateTime = ` ${hours}:${minutes}:${seconds}`;

      console.log(`New data received: ${newData}`);
      console.log(`Formatted dateTime: ${formattedDateTime}`);
    };

    return socket;
  }

  public static getCoinData(): ICoinChart[]|any {
    const socket = this.connectWebSocket();
    socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      const newData = {
        id: receivedData.E,
        s: receivedData.s,
        c: receivedData.c,
      };
      return (prevDataList: []) => [...prevDataList, newData];
    };

    return () => {
      socket.close();
    };
  }
}
