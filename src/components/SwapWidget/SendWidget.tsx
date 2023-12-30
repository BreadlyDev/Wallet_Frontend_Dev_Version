import React, { useContext } from "react";
import CoinIcon from "../CoinWidget/CoinIcon";
import { coins_min } from "../../consts/coins";
import { Context } from "../../main";
import { toJS } from "mobx";
import classes from './SwapWidget.module.scss'

type Props = {
  currency: string | null;
  currency_2: string | null;
  quantity: number | null;
  setCurrency: (value: string) => void;
  setQuantity: (value: number) => void;
  setQuantity_2: (value: number) => void;
};

const SendWidget: React.FC<Props> = ({
  currency,
  currency_2,
  quantity,
  setCurrency,
  setQuantity,
  setQuantity_2,
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
      if (quantity && currency_2) {
        const q2 = (quantity * prices[currency]) / prices[currency_2];
        setQuantity_2(q2);
      }
    } else {
      console.log(
        "Currency is null or undefined, or prices are not available."
      );
    }
  };

  return (
    <div className={classes.SwapWidget}>
      <div>
        <h4>You send</h4>
        <input
          type="text"
          inputMode="numeric"
          value={quantity || 0}
          onChange={(e) => handleQuantityChange(e)}
        />
      </div>
      <div>
        {currency && <CoinIcon coin={currency} />}
        <select value={currency || "BTC"} onChange={handleCoinChange}>
          <option value="BTC" disabled>
            Select a coin
          </option>
          {coins_min.map((coin, index) => {
            if(coin==="USDT"){
              return null 
            }
            return(
              <option key={index} value={coin}>
                {coin}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  );
};

export default SendWidget;
