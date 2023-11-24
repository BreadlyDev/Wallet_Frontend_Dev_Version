import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import {useContext} from 'react'
import classes from './CoinInfo.module.scss'
type Props = {
  coin:string
}

function CoinInfo({coin}: Props) {
  
  const { coinStore } = useContext(Context).stores;
  return (
    <div className={classes.CoinInfo}>
      {/* <img src=/> */}
      <h2>{coin}</h2>
      <span>${coinStore.price}</span>
    </div>
  )
}

export default observer(CoinInfo)