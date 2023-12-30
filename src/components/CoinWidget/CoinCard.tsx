import CoinIcon from "./CoinIcon"
import classes from './Coin.module.scss'
import { Link } from "react-router-dom"
type Props = {
  coin:string
  price:number
}

export default function CoinCard({coin, price}: Props) {
  if(coin==="USDT"){
    return null
  }
  return (
    <Link to={`/swap/${coin}`} className={classes.CoinCard}>
      <CoinIcon coin={coin}/>
      <span>{coin}</span>
      <span>{price}</span>
      <span className={classes.green}>0.33%</span>
      <span className={classes.green}>0.33%</span>
      <span className={classes.red}>0.33%</span>
      <span>8 605 005</span>
    </Link>
  )
}