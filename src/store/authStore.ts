import { makeAutoObservable } from "mobx";
import { loginService, registerService } from "../services/AuthService";
import { IUSer } from "../models/User";

class AuthStore {
  isAuthed = false;
  user:IUSer = { email:"", password:"",firstname:"",lastname:""};
  constructor() {
    makeAutoObservable(this);
    this.logout = this.logout.bind(this)
  }
  setUser(user: IUSer) {
    this.user = user;
  }
  async login(email: string, password: string) {
    loginService(email, password);
    this.isAuthed = true;
  }

  async register(user:IUSer) {
    registerService(user);
    this.isAuthed = true;
    
  }
  logout(){
    localStorage.clear()
    this.isAuthed ? this.isAuthed = false : location.reload();
  }
}

const authStore = new AuthStore();

export default authStore;
