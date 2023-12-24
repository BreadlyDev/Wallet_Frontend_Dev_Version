import { makeAutoObservable } from "mobx";
import { loginService, registerService } from "../services/AuthService";
import { IUSer } from "../models/User";

class AuthStore {
  isAuthed = false;
  user:IUSer = { email:"", password:"",firstname:"",lastname:""};
  constructor() {
    makeAutoObservable(this);
  }
  setUser(user: IUSer) {
    this.user = user;
  }
  login(email: string, password: string) {
    loginService(email, password);
    this.isAuthed = true;
  }

  register(user:IUSer) {
    registerService(user);    
    this.isAuthed = true;
  }
}

const authStore = new AuthStore();

export default authStore;
