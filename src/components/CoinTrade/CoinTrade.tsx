import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import { useContext, useState } from "react";
import classes from "./CoinTrade.module.scss";
type Props = {
  coin: string;
};

function CoinTrade({ coin }: Props) {
  const [amount, setAmount] = useState(1);
  const { coinStore } = useContext(Context).stores;
  return (
    <div className={classes.CoinTrade}>
      <h2>Buy {coin}</h2>
      <div className={classes.amount}>
        {coin}{" "}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
      </div>
      <div className={classes.cost}>$ {Math.round(coinStore.price * amount)}</div>
      <div className={classes.btns}>
        <div>Buy</div>
        <div>Sell</div>
      </div>
    </div>
  );
}
export default observer(CoinTrade);
