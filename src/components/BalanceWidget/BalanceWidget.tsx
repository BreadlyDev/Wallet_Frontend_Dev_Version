import classes from "./BalanceWidget.module.scss";

type Props = {
  children: string;
  title: string;
};

function BalanceWidget({ children, title }: Props) {
  return (
    <div className={classes.BalanceWidget}>
      <span>{title}</span>
      <span>{children}</span>
    </div>
  );
}

export default function BalanceWidgetList() {
  return (
    <div className={classes.list}>
      <BalanceWidget title="Balance">$132 324</BalanceWidget>
      <BalanceWidget title="Spent">$12 134</BalanceWidget>
      <BalanceWidget title="Gained">$65 376</BalanceWidget>
    </div>
  );
}
