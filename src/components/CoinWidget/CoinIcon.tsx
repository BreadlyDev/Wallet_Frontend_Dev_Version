import { useEffect, useState } from "react";
import btc from "./icons/btc.svg";
import btm from "./icons/Bytom.svg";
import crd from "./icons/Cardano.svg";
import doge from "./icons/Dogecoin.svg";
import eth from "./icons/Ethereum.svg";
import icx from "./icons/ICX.svg";
import ifc from "./icons/IFactom.svg";
import rvc from "./icons/Ravencoin.svg";
import stm from "./icons/Steem.svg";
import sol from "./icons/sol.svg";
type Props = {
  coin: string;
};

export default function CoinIcon({ coin }: Props) {
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
      case "STEEM":
        setImage(stm);
        break;
      case "SOL":
        setImage(sol);
        break;
      default:
        break;
    }
  }, [coin]);
  return (
    <div>
      <img src={image} alt={coin} width={100} />
    </div>
  );
}
