import React, { useContext } from "react";
import CoinIcon from "../CoinWidget/CoinIcon";
import { coins_min } from "../../consts/coins";
import { Context } from "../../main";
import { toJS } from "mobx";
import classes from './SwapWidget.module.scss'
type Props = {
  currency: string | null;
  quantity: number | null;
  setCurrency: (value: string) => void;
  setQuantity: (value: number) => void;
};

const ReceiveWidget: React.FC<Props> = ({
  currency,
  quantity,
  setCurrency,
  setQuantity,
}) => {
  const store = useContext(Context).stores;

  const handleCoinChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const prices = toJS(store.coinStore.prices);

    if (currency && prices) {
      setQuantity(Number(inputValue));
    } else {
      console.log(
        "Currency is null or undefined, or prices are not available."
      );
    }
  };

  return (
    <div className={classes.SwapWidget}>
      <div>
        <h4>You receive</h4>
        <input
          type="text"
          inputMode="numeric"
          value={quantity || 0}
          onChange={(e) => handleQuantityChange(e)}
        />
      </div>
      <div>
        {currency && <CoinIcon coin={currency} />}
        <select value={currency || "ETH"} onChange={handleCoinChange}>
          <option value="ETH" disabled>
            Select a coin
          </option>
          {coins_min.map((coin, index) => (
            <option key={index} value={coin}>
              {coin}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ReceiveWidget;
