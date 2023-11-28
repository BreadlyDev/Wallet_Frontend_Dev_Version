import { observer } from "mobx-react-lite";
import classes from "./BalanceWidget.module.scss";
import { Context } from "../../main";
import { useContext } from "react";

type Props = {
  value: number;
  title: string;
};

function BalanceWidget({ value, title }: Props) {
  return (
    <div className={classes.BalanceWidget}>
      <span>{title}</span>
      <span>${value}</span>
    </div>
  );
}

function BalanceWidgetList() {
  const { balanceStore } = useContext(Context).stores;
  return (
    <div className={classes.list}>
      <BalanceWidget title="Balance" value={balanceStore.usd} />
      <BalanceWidget title="Spent" value={balanceStore.spent} />
      <BalanceWidget title="Gained" value={balanceStore.gained} />
    </div>
  );
}

export default observer(BalanceWidgetList);
