// swap widget
import React, { useState } from "react";
import CoinIcon from "../CoinWidget/CoinIcon";

type Props = {
  type: string;
};

const coinOptions = ["BTC", "ETH", "ICX", "SOL", "STEEM"]; // Replace with your actual coin options

export default function SwapWidget({ type }: Props) {
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);

  const handleCoinChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoin(event.target.value);
  };

  return (
    <div>
      <div>
        <h4>You {type}</h4>
        <input type="number" />
      </div>
      <div>
        <select value={selectedCoin || ""} onChange={handleCoinChange}>
          <option value="" disabled>
            Select a coin
          </option>
          {coinOptions.map((coin, index) => (
            <option key={index} value={coin}>
              {coin}
            </option>
          ))}
        </select>
        {selectedCoin && <CoinIcon coin={selectedCoin} />}
      </div>
    </div>
  );
}
