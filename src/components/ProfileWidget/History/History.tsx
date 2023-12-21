import { useState } from "react";
import classes from './History.module.scss'
import Assets from "../Assets/Assets";
type Props = {};

export default function History({}: Props) {
  const [type, setType] = useState('all');
  return (
    <div className={classes.History}>
      <div className={classes.tabs}>
        <h3
          className={type=='all' ? classes.active : ""}
          onClick={() => setType('all')}
        >
          All
        </h3>
        <h3
          className={type==='purchase' ? classes.active : ""}
          onClick={() => setType('purchase')}
        >
          Purchase
        </h3>
        <h3
          className={type==='sale' ? classes.active : ""}
          onClick={() => setType('sale')}
        >
          Sale
        </h3>
      </div>
      <Assets/>
    </div>
  );
}
