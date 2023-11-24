import React from "react";
import classes from "./CoinWidget.module.scss";
import CoinIcon from "./CoinIcon";

type Props = {
  coin: string;
  amount: number;
  percent: number;
  currentPrice: number;
};

const CoinWidget: React.FC<Props> = ({
  coin,
  amount,
  percent,
  currentPrice,
}: Props) => {
  return (
    <div className={classes.CoinWidget}>
      <div className={classes.main}>
        <CoinIcon coin={coin} />
        <span>{amount}</span>
      </div>
      <div className={classes.info}>
        <span>{percent}%</span>
        <span>${currentPrice}</span>
      </div>
    </div>
  );
};

export default function CoinWidgetList() {
  return (
    <div className={classes.list}>
      <CoinWidget
        coin="BTC"
        amount={32_020}
        currentPrice={37_000}
        percent={11.23}
      />
      <CoinWidget
        coin="BTM"
        amount={32_020}
        currentPrice={37_000}
        percent={11.23}
      />
      <CoinWidget
        coin="CRD"
        amount={32_020}
        currentPrice={37_000}
        percent={11.23}
      />
      <CoinWidget
        coin="DOGE"
        amount={32_020}
        currentPrice={37_000}
        percent={11.23}
      />
      <CoinWidget
        coin="ETH"
        amount={32_020}
        currentPrice={37_000}
        percent={11.23}
      />
      <CoinWidget
        coin="ICX"
        amount={32_020}
        currentPrice={37_000}
        percent={11.23}
      />
      <CoinWidget
        coin="IFC"
        amount={32_020}
        currentPrice={37_000}
        percent={11.23}
      />
      <CoinWidget
        coin="RVC"
        amount={32_020}
        currentPrice={37_000}
        percent={11.23}
      />
      <CoinWidget
        coin="STM"
        amount={32_020}
        currentPrice={37_000}
        percent={11.23}
      />
    </div>
  );
}