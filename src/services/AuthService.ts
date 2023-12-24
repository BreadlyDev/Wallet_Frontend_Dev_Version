import axios from "axios";
import { api, api_min } from "../consts/api";
import { IUSer } from "../models/User";

export async function registerService({
  email,
  password,
  firstname,
  lastname,
}: IUSer) {
  try {
    const res = await axios.post(api + "/auth/register", {
      email,
      password,
      firstname,
      lastname,
    });
    console.log(res.data);
    console.log("success");
  } catch (e: any) {
    console.log("eroor: ", e?.message, e?.name);
  }
}
export async function loginService(email: string, password: string) {
  try {
    const res = await axios.post(
      api + "/auth/login",
      { username: email, password },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    // localStorage.setItem("token", res.data[0].access_token);
    // localStorage.setItem("user", res.data[1]);
    console.log(res.data);
  } catch (e: any) {
    console.log(e?.message);
  }
}

export async function googleService() {
  try {
    const res = await axios.get(api_min + "/auth/google/authorize");
    console.log(res.data);
  } catch (e: any) {
    console.log(e?.message);
  }
}
