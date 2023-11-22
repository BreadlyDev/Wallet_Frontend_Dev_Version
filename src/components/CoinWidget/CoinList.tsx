import CoinIcon from "./CoinIcon";

export default function CoinList() {
  const coins = ["BTC", "BTM", "CRD", "DOGE", "ETH", "ICX", "IFC", "RVC", "STM"]
  return (
    <div>
      {coins.map((item)=>{
        return <CoinIcon coin={item}/>
      })}
    </div>
  )
}