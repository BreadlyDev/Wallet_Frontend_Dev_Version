import axios from "axios";
import { api } from "../consts/api";

export async function registerService(email:string, username:string, password:string) {
  try{
    const res = await axios.post(api + "/auth/register", {email, username, password})
    localStorage.setItem('token', res.data.access_token)
    console.log(res.data);
  }
  catch(e:any){
    console.log(e?.message);
  }
}
export async function loginService(username:string, password:string) {
  try{
    const res = await axios.post(api + "/auth//login", {username, password})
    localStorage.setItem('token', res.data.access_token)
    console.log(res.data);
  }
  catch(e:any){
    console.log(e?.message);
  }
}