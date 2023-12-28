import React, { useContext, useState } from "react";
import styles from "./Swap.module.scss";
import SwapWidget from "../../components/SwapWidget/SwapWidget";
import swap from '../../assets/Group 2.png'
import { Context } from "../../main";

const Swap: React.FC = () => {
  const store = useContext(Context).stores.balanceStore
  const [currency, setCurrency] = useState<string | null>(null);
  const [currency_2, setCurrency_2] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number|null>(0);
  function swapCoins(){
    store.swapCoin(currency, currency_2, quantity)
  }
  return (
    <div className={styles.Swap}>
      <h1>Swap tokens</h1>
      <div>
        <SwapWidget type={"send"} currency={currency} setCurrency={setCurrency} setQuantity={setQuantity}/>
				<img src={swap} onClick={swapCoins}/>
        <SwapWidget type={"recieve"} currency_2={currency_2}  setCurrency_2={setCurrency_2}/>
      </div>
    </div>
  );
};

export default Swap;
