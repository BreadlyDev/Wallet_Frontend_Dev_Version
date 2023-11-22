import btc from "./icons/btc.svg";
import btm from "./icons/Bytom.svg";
import crd from "./icons/Cardano.svg";
import doge from "./icons/Dogecoin.svg";
import eth from "./icons/Ethereum.svg";
import icx from "./icons/ICX.svg";
import ifc from "./icons/IFactom.svg";
import rvc from "./icons/Ravencoin.svg";
import stm from "./icons/Steem.svg";

import React, { useEffect, useState } from "react";
import classes from './CoinWidget.module.scss'

type Props = {
  coin: string;
  amount: number;
  percent: number;
  currentPrice: number;
};

const CoinWidget: React.FC<Props> = ({ coin, amount, percent, currentPrice }: Props) => {
  const [image, setImage] = useState<string>(""); 

  useEffect(() => {
    switch (coin) {
      case "BTC":
        setImage(btc);
        break;
      case "BTM":
        setImage(btm);
        break;
      case "CRD":
        setImage(crd);
        break;
      case "DOGE":
        setImage(doge);
        break;
      case "ETH":
        setImage(eth);
        break;
      case "ICX":
        setImage(icx);
        break;
      case "IFC":
        setImage(ifc);
        break;
      case "RVC":
        setImage(rvc);
        break;
      case "STM":
        setImage(stm);
        break;
      default:
        break;
    }
  }, [coin]);

  return (
    <div className={classes.CoinWidget}>
      <div className={classes.main}>
        <img alt={coin} src={image} />
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
      <CoinWidget coin="BTC" amount={32_020} currentPrice={37_000} percent={11.23}/>
      <CoinWidget coin="BTM" amount={32_020} currentPrice={37_000} percent={11.23}/>
      <CoinWidget coin="CRD" amount={32_020} currentPrice={37_000} percent={11.23}/>
      <CoinWidget coin="DOGE" amount={32_020} currentPrice={37_000} percent={11.23}/>
      <CoinWidget coin="ETH" amount={32_020} currentPrice={37_000} percent={11.23}/>
      <CoinWidget coin="ICX" amount={32_020} currentPrice={37_000} percent={11.23}/>
      <CoinWidget coin="IFC" amount={32_020} currentPrice={37_000} percent={11.23}/>
      <CoinWidget coin="RVC" amount={32_020} currentPrice={37_000} percent={11.23}/>
      <CoinWidget coin="STM" amount={32_020} currentPrice={37_000} percent={11.23}/>
    </div>
  )
}
