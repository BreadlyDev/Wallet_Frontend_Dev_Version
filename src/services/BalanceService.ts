import axios from "axios";
import { api } from "../consts/api";

export async function asyncBuyCoin(user_id: number, currency: string, quantity: number) {
  try{
    const type: string = "PURCHASE";
    const currency_2: string | null = null;
    const res = await axios.post(api+`/wallet/buy/currency?user_id=${user_id}`, {currency, currency_2, quantity, type});
    console.log(res);
  }
  catch(e:any){
    console.log(e?.message);
  }
}
export async function asyncSellCoin(user_id: number, currency: string, quantity: number) {
  try{
    const type: string = "SALE";
    const currency_2: string | null = null;
    const res = await axios.post(api+`/wallet/sell/currency?user_id=${user_id}`, {currency, currency_2, quantity, type});
    console.log(res);
  }
  catch(e:any){
    console.log(e?.message);
  }
}
export async function asyncSwapCoin(user_id: number, currency: string, currency_2: string, quantity: number) {
  try{
    const type: string = "SWAP";
    const res = await axios.post(api+`/wallet/swap/currency?user_id=${user_id}`, {currency, currency_2, quantity, type});
    console.log(res);
  }
  catch(e:any){
    console.log(e?.message);
  }
}
export async function getBalance(user_id: number, token: string) {
  try {
    return axios.get(
      `http://127.0.0.1:8080/api/v1/wallet/get/all/wallet/data?user_id=${user_id}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
  } catch (e) {
    console.log(e);
  }
}
