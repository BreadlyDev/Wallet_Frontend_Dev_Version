import { action, makeAutoObservable, runInAction } from "mobx";
import { coins_min } from "../consts/coins";
import {
  asyncBuyCoin,
  asyncSellCoin,
  asyncSwapCoin,
  getBalance,
} from "../services/BalanceService";
interface CurrencyData {
  name: string;
  quantity: number;
  id: number;
  wallet_id: number;
}

interface Currency {
  Currency: CurrencyData;
}

class BalanceStore {
  balance: { [key: string]: number } = {};
  status = "";

  constructor() {
    makeAutoObservable(this);
    coins_min.forEach((coin) => {
      this.balance[coin] = 0;
    });
  }

  @action
  async getBalance() {
    try {
      const user: string = String(localStorage.getItem("user"));
      const user_id: number = JSON.parse(user).id;
      const token = String(localStorage.getItem("token"));
      const res = await getBalance(user_id, token);
      // console.log(this.balance);

      runInAction(() => {
        const currencies = res?.data.currencies;
        currencies.forEach((element: Currency) => {
          this.balance[element.Currency.name] = element.Currency.quantity;
        });
      });

      // console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  @action
  buyCoin(user_id: number, currency: string, quantity: number) {
    this.balance[currency] += quantity;
    asyncBuyCoin(user_id, currency, quantity);
    this.getBalance();
  }

  @action
  sellCoin(user_id: number, currency: string, quantity: number) {
    this.balance[currency] -= quantity;
    asyncSellCoin(user_id, currency, quantity);
    this.getBalance();
  }

  @action
  swapCoin(
    currency: string,
    currency_2: string,
    quantity: number
  ) {
    this.balance[currency] -=quantity;
    this.balance[currency_2] +=quantity
    const user: string = String(localStorage.getItem("user"));
    const user_id: number = JSON.parse(user).id;
    asyncSwapCoin(user_id, currency, currency_2, quantity);
    this.getBalance();
  }
}

const balanceStore = new BalanceStore();

export default balanceStore;
