import icon from '../../CoinWidget/icons/btc.svg'
import classes from './Assets.module.scss'
type Props = {};

export default function Assets({}: Props) {
  const coins = [
    { title: "btc", bill: 2300, amount: 2, price: 1230 },
    { title: "btc", bill: 2300, amount: 2, price: 1230 },
    { title: "btc", bill: 2300, amount: 2, price: 1230 },
  ];
  return (
    <div className={classes.Assets}>
      {coins.map((item, id) => {
        return (
          <div key={id}>
            <img src={icon} />
            <div>{item.title}</div>
            <div>
              <div>{item.bill}$</div>
              <div>{item.amount}</div>
            </div>
            <div>{item.price}$</div>
          </div>
        );
      })}
    </div>
  );
}
