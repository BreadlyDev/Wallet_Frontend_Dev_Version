import React from "react";
import styles from "./Swap.module.scss";
import SwapWidget from "../../components/SwapWidget/SwapWidget";
import swap from '../../assets/Group 2.png'

const Swap: React.FC = () => {
  return (
    <div className={styles.Swap}>
      <h1>Swap tokens</h1>
      <div>
        <SwapWidget type="send" />
				<img src={swap}/>
        <SwapWidget type="recieve" />
      </div>
    </div>
  );
};

export default Swap;
