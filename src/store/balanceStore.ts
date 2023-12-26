import { makeAutoObservable } from "mobx";
import {
  asyncDecrementBalance,
  asyncIncrementBalance,
  getBalance,
} from "../services/BalanceService";

class BalanceStore {
  usd = 100000;
  gained = 0;
  spent = 0;
  btc = 0;
  eth = 0;
  doge = 0;
  status = "";
  constructor() {
    makeAutoObservable(this);
  }
  async getBalance() {
    try {
      const user: string = String(localStorage.getItem("user"));
      const user_id: number = JSON.parse(user).id;
      const token = String(localStorage.getItem("token"));
      const res = await getBalance(user_id, token);
      console.log(res);
    } catch (e){
      console.log(e);
    }
  }
  buyCoin(coin: string, amount: number, cost: number) {
    if (this.usd - cost < 0) {
      this.status = "not enough money";
      return;
    }
    switch (coin) {
      case "BTC":
        this.btc += amount;
        break;
      case "ETH":
        this.eth += amount;
        break;
      case "DOGE":
        this.doge += amount;
        break;

      default:
        break;
    }
    this.decrementBalance(cost);
  }
  sellCoin(coin: string, amount: number, cost: number) {
    switch (coin) {
      case "BTC":
        if (this.btc < amount) {
          this.status = "not enough btc";
          return;
        }
        this.btc -= amount;
        break;
      case "ETH":
        if (this.eth < amount) {
          this.status = "not enough eth";
          return;
        }
        this.eth -= amount;
        break;
      case "DOGE":
        if (this.doge < amount) {
          this.status = "not enough doge";
          return;
        }
        this.doge -= amount;
        break;

      default:
        break;
    }
    console.log(this.status);

    this.incrementBalance(cost);
  }
  incrementBalance(amount: number) {
    this.usd += amount;
    this.gained += amount;
    asyncIncrementBalance(amount);
  }

  decrementBalance(amount: number) {
    this.usd -= amount;
    this.spent += amount;
    asyncDecrementBalance(amount);
  }
}

const balanceStore = new BalanceStore();

export default balanceStore;
