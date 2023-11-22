import { makeAutoObservable } from "mobx";
import { loginService, registerService } from "../services/AuthService";
import { IUSer } from "../models/User";

class AuthStore {
  isAuthed = false;
  user:IUSer = {username:"", email:"", password:""};
  constructor() {
    makeAutoObservable(this);
  }
  setUser(user: IUSer) {
    this.user = user;
  }
  login(username: string, password: string) {
    loginService(username, password);
    this.isAuthed = true;
  }

  register(email: string, username: string, password: string) {
    registerService(email, username, password);
    this.isAuthed = true;
  }
}

const authStore = new AuthStore();

export default authStore;
