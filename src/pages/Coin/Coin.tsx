import CoinChart from "../../components/CoinChart/CoinChart";
import CoinInfo from "../../components/CoinInfo/CoinInfo";
import CoinTrade from "../../components/CoinTrade/CoinTrade";
import classes from "./Coin.module.scss";
type Props = {};

export default function Price({}: Props) {
  return (
    <div className={classes.Coin}>
      <div className={classes.widgets}>
        <CoinInfo coin="BTC" />
        <CoinTrade coin="BTC" />
      </div>
      <CoinChart />
    </div>
  );
}
