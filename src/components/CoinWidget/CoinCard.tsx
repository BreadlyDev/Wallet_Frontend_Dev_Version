import CoinIcon from "./CoinIcon"
import classes from './Coin.module.scss'
import { Link } from "react-router-dom"
type Props = {
  coin:string
}

export default function CoinCard({coin}: Props) {
  return (
    <Link to={`/trade/${coin}`} className={classes.CoinCard}>
      <CoinIcon coin={coin}/>
      <span>{coin}</span>
      <span>$ 37 324</span>
    </Link>
  )
}