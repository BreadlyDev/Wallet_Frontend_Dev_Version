import { useParams } from "react-router-dom";
import CoinChart from "../../components/CoinChart/CoinChart";
import CoinInfo from "../../components/CoinInfo/CoinInfo";
import CoinTrade from "../../components/CoinTrade/CoinTrade";
import classes from "./Coin.module.scss";
type Props = {};

export default function Price({}: Props) {
  const params = useParams()
  const coin:any = params.id
  
  return (
    <div className={classes.Coin}>
      <div className={classes.widgets}>
        <CoinInfo coin={coin} />
        <CoinTrade coin={coin} />
      </div>
      <CoinChart />
    </div> 
  );
}
