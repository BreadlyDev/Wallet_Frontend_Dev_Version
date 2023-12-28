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
    try {
    const logged =  await loginService(email, password);
    this.isAuthed = logged;
    }
    catch(e){
      console.log(e);
      
    }
  }

  async register(user:IUSer) {
    try {
      const logged =  await registerService(user);
      this.isAuthed = logged;
      }
      catch(e){
        console.log(e);
        
      }
    
  }
  logout(){
    localStorage.clear()
    this.isAuthed ? this.isAuthed = false : location.reload();
  }
}

const authStore = new AuthStore();

export default authStore;
