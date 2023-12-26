import axios from "axios";
import { api } from "../consts/api";

export async function asyncIncrementBalance(amount: number) {
  // try{
  //   const res = await axios.post("", {amount})
  //   console.log(res);
  // }
  // catch(e:any){
  //   console.log(e?.message);

  // }
  return amount;
}
export async function asyncDecrementBalance(amount: number) {
  // try{
  //   const res = await axios.post("", {amount})
  //   console.log(res);
  // }
  // catch(e:any){
  //   console.log(e?.message);

  // }
  return amount;
}

export async function getBalance(user_id: number, token: string) {
  try {
    return axios.get(
      "https://wallet-dev-server-dev-sqsk.2.ie-1.fl0.io/api/v1/wallet/get/all/wallet/data?user_id=" +
        user_id,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
  } catch (e) {
    console.log(e);
  }
}
