import { makeAutoObservable } from "mobx";
import { decrementBalance, incrementBalance } from "../services/BalanceService";

class BalanceStore {
  usd = 0;
  btc= 0;
  eth= 0;
  doge= 0;
  constructor() {
    makeAutoObservable(this);
  }
  buyCoin(coin: string, amount: number) {
    console.log(coin, amount);
    
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
    this.usd-=amount
  }
  sellCoin(coin: string, amount: number) {
    console.log(coin, amount);
    
    switch (coin) {
      case "BTC":
        this.btc -= amount;
        break;
      case "ETH":
        this.eth -= amount;
        break;
      case "DOGE":
        this.doge -= amount;
        break;

      default:
        break;
    }
    this.usd+=amount
  }
  incrementBalance(amount: number) {
    this.usd += amount;
    incrementBalance(amount);
  }

  decrementBalance(amount: number) {
    this.usd -= amount;
    decrementBalance(amount);
  }
}

const balanceStore = new BalanceStore();

export default balanceStore;
