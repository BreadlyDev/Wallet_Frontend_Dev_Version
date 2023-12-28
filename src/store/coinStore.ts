import { makeAutoObservable } from "mobx";
import { coins_min } from "../consts/coins";

class CoinStore {
  prices: { [key: string]: number } = {};

  constructor() {
    makeAutoObservable(this);
    coins_min.forEach((coin) => {
      this.prices[coin] = 0;
    });
  }

  setPrice(coin: string, price: number) {
    this.prices[coin] = price
  }
}

const coinStore = new CoinStore();

export default coinStore;
