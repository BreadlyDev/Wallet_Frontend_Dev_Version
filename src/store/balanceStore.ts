import { makeAutoObservable } from "mobx";
import {
  asyncBuyCoin,
  asyncSellCoin,
  asyncSwapCoin,
  getBalance,
} from "../services/BalanceService";

interface CurrencyData {
  name: string,
  quantity: number,
  id: number,
  wallet_id: number
} 

interface Currency {
  Currency: CurrencyData
}

class BalanceStore {
  usd = 0;
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
          case null:
            break;      
        } 
      });  
      // this.usd = res?.data.currencies[0].Currency.quantity    

      console.log(res);
    } catch (e){
      console.log(e);
    }
  }
  buyCoin(user_id: number, currency: string, quantity: number) {
    asyncBuyCoin(user_id=user_id, currency=currency, quantity=quantity);
    this.getBalance();
  }
  sellCoin(user_id: number, currency: string, quantity: number) {
    asyncSellCoin(user_id=user_id, currency=currency, quantity=quantity);
    this.getBalance();
  }
  swapCoin(user_id: number, currency: string, currency_2: string, quantity: number) {
    asyncSwapCoin(user_id=user_id, currency=currency, currency_2=currency_2, quantity=quantity);
    this.getBalance();
  }
}

const balanceStore = new BalanceStore();

export default balanceStore;
