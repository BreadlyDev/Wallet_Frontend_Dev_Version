import { makeAutoObservable } from 'mobx';
import { decrementBalance, incrementBalance } from '../services/BalanceService';

class BalanceStore {
  currentBalance = 0

  constructor() {
    makeAutoObservable(this);
  }

  incrementBalance(amount:number) {
    this.currentBalance += amount;
    incrementBalance(amount)
  }

  decrementBalance(amount:number) {
    this.currentBalance -= amount;
    decrementBalance(amount)
  }
}

const balanceStore = new BalanceStore();

export default balanceStore;