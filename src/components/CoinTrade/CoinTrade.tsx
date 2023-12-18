import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import { useContext, useState, useEffect } from "react";
import classes from "./CoinTrade.module.scss";

type Props = {
  coin: string;
};

function CoinTrade({ coin }: Props) {
  const [amount, setAmount] = useState(1);
  const { coinStore } = useContext(Context).stores;
  const { balanceStore } = useContext(Context).stores;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(parseFloat(Number(coinStore.price * amount).toFixed(2)));  
  }, [coinStore.price]);

  return (
    <div className={classes.CoinTrade}>
      <h2>Buy {coin}</h2>
      <div className={classes.amount}>
        {coin}{" "}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value, 10))}
        />
      </div>
      <div className={classes.cost}>$ {totalPrice}</div>
      <div className={classes.btns}>
        <button onClick={() => balanceStore.buyCoin(coin, amount, totalPrice)}>Buy</button>
        <button onClick={() => balanceStore.sellCoin(coin, amount, totalPrice)}>Sell</button>
      </div>
    </div>
  );
}

export default observer(CoinTrade);
