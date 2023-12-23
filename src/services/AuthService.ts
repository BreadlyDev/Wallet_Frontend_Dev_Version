import axios from "axios";
import { api, api_min } from "../consts/api";

export async function registerService(
  email: string,
  username: string,
  password: string
) {
  try {
    const res = await axios.post(
      api + "/auth/register",
      { email, username, password },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    localStorage.setItem("token", res.data.access_token);
    console.log(res.data);
  } catch (e: any) {
    console.log(e?.message);
  }
}
export async function loginService(username: string, password: string) {
  try {
    const res = await axios.post(
      api + "/auth/login",
      { username, password },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    localStorage.setItem("token", res.data.access_token);
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
