import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import { useContext, useState, useEffect } from "react";
import classes from "./CoinTrade.module.scss";
import { toJS } from "mobx";

type Props = {
  coin: string;
};

function CoinTrade({ coin }: Props) {
  const [amount, setAmount] = useState(1);
  const { coinStore } = useContext(Context).stores;
  const { balanceStore } = useContext(Context).stores;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(parseFloat(Number(toJS(coinStore.prices)[coin] * amount).toFixed(2)));  
  }, [toJS(coinStore.prices)[coin], amount]);

  const user: string = String(localStorage.getItem("user"));
  const user_id: number = JSON.parse(user).id;

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
        <button onClick={() => balanceStore.buyCoin(user_id, coin, amount)}>Buy</button>
        <button onClick={() => balanceStore.sellCoin(user_id, coin, amount)}>Sell</button>
      </div>
    </div>
  );
}

export default observer(CoinTrade);
