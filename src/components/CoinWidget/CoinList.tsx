import CoinCard from "./CoinCard";
import classes from './Coin.module.scss'
export default function CoinList() {
  const coins = ["BTC", "DOGE", "ETH"]
  return (
    <div className={classes.list}>
      {coins.map((item, id)=>{
        return <CoinCard coin={item} key={id}/>
      })}
    </div>
  )
}