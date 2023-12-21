import CoinCard from "./CoinCard";
import classes from './Coin.module.scss'
import { useState } from "react";
export default function CoinList() {
  const coins = ["BTC", "DOGE", "ETH"]
  const [isGainers, setIsGainers] = useState(true)
  return (
    <div className={classes.list}>
      <h2>Tokens</h2>
      <div className={classes.tabs}>
        <h3 className={isGainers?classes.active:""} onClick={()=>setIsGainers(!isGainers)}>Top gainers</h3>
        <h3 className={!isGainers?classes.active:""} onClick={()=>setIsGainers(!isGainers)}>Top losses</h3>
      </div>
      {coins.map((item, id)=>{
        return <CoinCard coin={item} key={id}/>
      })}
    </div>
  )
}