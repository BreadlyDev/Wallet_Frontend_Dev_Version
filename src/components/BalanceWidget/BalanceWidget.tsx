import { observer } from "mobx-react-lite";
import classes from "./BalanceWidget.module.scss";
import { Context } from "../../main";
import { useContext } from "react";

type Props = {
  value: number;
  title: string;
  usd?:boolean
};

function BalanceWidget({ value, title, usd }: Props) {
  return (
    <div className={classes.BalanceWidget}>
      <span>{title}</span>
      <span>{Number(value).toFixed(2)} {usd?'$':''}</span>
    </div>
  );
}

function BalanceWidgetList() {
  const { balanceStore } = useContext(Context).stores;
  return (
    <div className={classes.list}>
      <BalanceWidget title="Balance" value={balanceStore.usd} usd={true}/>
      <BalanceWidget title="Spent" value={balanceStore.spent} usd={true}/>
      <BalanceWidget title="Gained" value={balanceStore.gained}  usd={true}/>
      <BalanceWidget title="BTC" value={balanceStore.btc} />
      <BalanceWidget title="ETH" value={balanceStore.eth} />
      <BalanceWidget title="DOGE" value={balanceStore.doge} />
    </div>
  );
}

export default observer(BalanceWidgetList);
