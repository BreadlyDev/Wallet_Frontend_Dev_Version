import React from "react";
import CoinIcon from "../CoinWidget/CoinIcon";
import { coins_min } from "../../consts/coins";

type Props = {
  type: string;
  currency?: string | null;
  currency_2?: string | null;
  setCurrency?: ((value: string) => void) | undefined;
  setCurrency_2?: ((value: string) => void) | undefined;
};

export default function SwapWidget({
  type,
  currency,
  currency_2,
  setCurrency,
  setCurrency_2,
}: Props) {
  const handleCoinChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (type === "send" && setCurrency) {
      setCurrency(String(event.target.value));
    }
    if (type === "recieve" && setCurrency_2) {
      setCurrency_2(String(event.target.value));
    }
  };
  

  return (
    <div>
      <div>
        <h4>You {type}</h4>
        <input type="number" />
      </div>
      <div>
        {type === "send"
          ? currency && <CoinIcon coin={currency} />
          : type === "recieve"
          ? currency_2 && <CoinIcon coin={currency_2} />
          : null}

        <select
          value={type === "send" ? String(currency) : String(currency_2)}
          onChange={handleCoinChange}
        >
          <option value="" disabled>
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
}
