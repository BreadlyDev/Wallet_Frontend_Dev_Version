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

const  BalanceWidget = observer(({ value, title, usd }: Props) => {
  return (
    <div className={classes.BalanceWidget}>
      <span>{title}</span>
      <span>
        {Number(value).toFixed(2)} {usd ? "$" : ""}
      </span>
    </div>
  );
})
function BalanceWidgetList() {
  const { balanceStore } = useContext(Context).stores;
  const [coins, setCoins] = useState<[string | number, string | number][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await balanceStore.getBalance();

      const entries: [string, number][] = Object.entries(
        toJS(balanceStore.balance)
      );

      setCoins(entries);
    };

    fetchData();
  }, [balanceStore]);

  return (
    <div className={classes.list}>
      
      {coins.map((coin, id) => (
        <BalanceWidget
          title={String(coin[0])}
          value={Number(coin[1])}
          usd={Boolean(coin[0]==="USDT")}
          key={id}
        />
      ))}
    </div>
  );
}

export default observer(BalanceWidgetList);
