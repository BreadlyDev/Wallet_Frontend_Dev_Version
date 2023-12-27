import { action, makeAutoObservable, runInAction } from "mobx";
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
  usd = 0;
  btc = 0;
  eth = 0;
  doge = 0;
  status = "";

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async getBalance() {
    try {
      const user: string = String(localStorage.getItem("user"));
      const user_id: number = JSON.parse(user).id;
      const token = String(localStorage.getItem("token"));
      const res = await getBalance(user_id, token);

      runInAction(() => {
        const currencies = res?.data.currencies;
        currencies.forEach((element: Currency) => {
          switch (element.Currency.name) {
            case "USDT":
              this.usd = element.Currency.quantity;
              break;
            case "BTC":
              this.btc = element.Currency.quantity;
              break;
            case "DOGE":
              this.doge = element.Currency.quantity;
              break;
            case "ETH":
              this.eth = element.Currency.quantity;
              break;
            default:
              break;
          }
        });
      });

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  @action
  buyCoin(user_id: number, currency: string, quantity: number) {
    asyncBuyCoin(user_id, currency, quantity);
    this.getBalance();
  }

  @action
  sellCoin(user_id: number, currency: string, quantity: number) {
    asyncSellCoin(user_id, currency, quantity);
    this.getBalance();
  }

  @action
  swapCoin(
    user_id: number,
    currency: string,
    currency_2: string,
    quantity: number
  ) {
    asyncSwapCoin(user_id, currency, currency_2, quantity);
    this.getBalance();
  }
}

const balanceStore = new BalanceStore();

export default balanceStore;
