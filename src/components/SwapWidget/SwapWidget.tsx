import CoinIcon from "../CoinWidget/CoinIcon";

type Props = {
  type: string;
};

export default function SwapWidget({ type }: Props) {
  return (
    <div>
      <div>
        <h4>You {type}</h4>
        <input type="number"/>
      </div>
      <div>
        <CoinIcon coin="BTC"/>
      </div>
    </div>
  );
}
