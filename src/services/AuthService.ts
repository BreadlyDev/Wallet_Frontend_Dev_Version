import axios from "axios";
import { api } from "../consts/api";
import { IUSer } from "../models/User";

export async function registerService({
  email,
  password,
  firstname,
  lastname,
}: IUSer): Promise<boolean> {
  try {
    console.log({
      email,
      password,
      firstname,
      lastname,
    }, api);
    
    const res = await axios.post(api + "/auth/register/custom", {
      email,
      password,
      firstname,
      lastname,
    });
    localStorage.setItem("token", res.data[0].access_token);
    localStorage.setItem("user", JSON.stringify(res.data[1]));
    console.log(res.data);
    return true;

    // console.log("success");
    // loginService(email, password)
  } catch (e: any) {
    console.log("eroor: ", e?.message, e?.name);
    return false;
  }
}
export async function loginService(
  email: string,
  password: string
): Promise<boolean> {
  try {
    const res = await axios.post(api + "/auth/login/custom", {
      email,
      password,
    });
    localStorage.setItem("token", res.data[0].access_token);
    localStorage.setItem("user", JSON.stringify(res.data[1]));
    console.log(res.data);
    return true;
  } catch (e: any) {
    console.log(e?.message);
    return false;
  }
}

export async function googleService() {
  try {
    const res = await axios.get(api + "/auth/authorize");
    googleLogin(res.data.authorization_url);
  } catch (e: any) {
    console.log(e?.message);
  }
}

async function googleLogin(url: string) {
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (e: any) {
    console.log(e?.message);
  }
}
