import { observer } from "mobx-react-lite";
import classes from "./BalanceWidget.module.scss";
import { Context } from "../../main";
import { useContext, useEffect, useState } from "react";
import { toJS } from "mobx";

type Props = {
  value: number;
  title: string;
  usd?: boolean;
};

function BalanceWidget({ value, title, usd }: Props) {
  return (
    <div className={classes.BalanceWidget}>
      <span>{title}</span>
      <span>
        {Number(value).toFixed(2)} {usd ? "$" : ""}
      </span>
    </div>
  );
}
function BalanceWidgetList() {
  const { balanceStore } = useContext(Context).stores;
  const [coins, setCoins] = useState<[string | number, string | number][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await balanceStore.getBalance();
      console.log(toJS(balanceStore.balance));
      
      // Convert the object to an array of key-value pairs
      const entries: [string, number][] = Object.entries(toJS(balanceStore.balance));

      // Set the state with the converted array
      setCoins(entries);
    };

    fetchData();
  }, [balanceStore]);

  return (
    <div className={classes.list}>
      <BalanceWidget title="Balance" value={balanceStore.balance['USDT']} usd={true} />
      {coins.map((coin, id) => (
        <BalanceWidget
          title={String(coin[0])}
          value={Number(coin[1])}
          key={id}
        />
      ))}
    </div>
  );
}

export default observer(BalanceWidgetList);
