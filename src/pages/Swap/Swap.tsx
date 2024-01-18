import React, { useContext, useState } from "react";
import styles from "./Swap.module.scss";
import swap from "../../assets/Group 2.png";
import { Context } from "../../main";
import SendWidget from "../../components/SwapWidget/SendWidget";
import ReceiveWidget from "../../components/SwapWidget/ReceiveWidget";

const Swap: React.FC = () => {
  const store = useContext(Context).stores.balanceStore;
  const [currency, setCurrency] = useState<string>("");
  const [currency_2, setCurrency_2] = useState<string>("");
  const [quantity, setQuantity] = useState<number >(0);
  const [quantity_2, setQuantity_2] = useState<number | null>(0);
  function swapCoins() {
    store.swapCoin(currency, currency_2, quantity);
  }
  
  return (
    <div className={styles.Swap}>
      <h1>Swap tokens</h1>
      <div>
        <SendWidget
          currency={currency}
          currency_2={currency_2}
          quantity={quantity}
          setCurrency={setCurrency}
          setQuantity={setQuantity}
          setQuantity_2={setQuantity_2}
        />
        <img src={swap} onClick={swapCoins} />
        <ReceiveWidget
          currency={currency_2}
          quantity={quantity_2}
          setCurrency={setCurrency_2}
          setQuantity={setQuantity_2}
        />
      </div>
    </div>
  );
};

export default Swap;
