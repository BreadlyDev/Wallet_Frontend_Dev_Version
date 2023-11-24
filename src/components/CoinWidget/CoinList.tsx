import CoinCard from "./CoinCard";
import classes from './Coin.module.scss'
export default function CoinList() {
  const coins = ["BTC", "BTM", "CRD", "DOGE", "ETH", "ICX", "IFC", "RVC", "STM"]
  return (
    <div className={classes.list}>
      {coins.map((item)=>{
        return <CoinCard coin={item}/>
      })}
    </div>
  )
}