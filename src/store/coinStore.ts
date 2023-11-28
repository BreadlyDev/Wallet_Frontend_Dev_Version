import {  makeAutoObservable } from "mobx";

class CoinStore {
  price = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setPrice(price: number) {
    this.price = price
  }
}

const coinStore = new CoinStore();

export default coinStore;
