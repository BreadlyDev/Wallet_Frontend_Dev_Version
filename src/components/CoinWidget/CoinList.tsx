import CoinCard from "./CoinCard";
import classes from './Coin.module.scss'
import { useContext, useState } from "react";
import { Context } from "../../main";
import { toJS } from "mobx";
export default function CoinList() {
  const [coins, setCoins] = useState<{ name: string, price: number }[]>([]);
  const store = useContext(Context).stores
  const [isGainers, setIsGainers] = useState(true)
  setInterval(()=>{
    const arrayOfObjects = Object.entries(toJS(store.coinStore.prices)).map(([name, price]) => ({
      name,
      price,
    }));
    setCoins(arrayOfObjects)
  }, 500)
  return (
    <div className={classes.list}>
      <h2>Tokens</h2>
      <div className={classes.tabs}>
        <h3 className={isGainers?classes.active:""} onClick={()=>setIsGainers(!isGainers)}>Top gainers</h3>
        <h3 className={!isGainers?classes.active:""} onClick={()=>setIsGainers(!isGainers)}>Top losses</h3>
      </div>
      {coins.map((item, id)=>{
        return <CoinCard coin={item.name} price={item.price} key={id}/>
      })}
    </div>
  )
}