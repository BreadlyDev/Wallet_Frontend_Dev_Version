import React, { useState } from "react";
import styles from "./Swap.module.scss";
import SwapWidget from "../../components/SwapWidget/SwapWidget";
import swap from '../../assets/Group 2.png'

const Swap: React.FC = () => {
  const [currency, setCurrency] = useState<string | null>(null);
  const [currency_2, setCurrency_2] = useState<string | null>(null);

  return (
    <div className={styles.Swap}>
      <h1>Swap tokens</h1>
      <div>
        <SwapWidget type={"send"} currency={currency} setCurrency={setCurrency}/>
				<img src={swap}/>
        <SwapWidget type={"recieve"} currency_2={currency_2}  setCurrency_2={setCurrency_2}/>
      </div>
    </div>
  );
};

export default Swap;
