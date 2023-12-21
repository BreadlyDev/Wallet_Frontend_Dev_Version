import { useState } from "react";
import classes from "./ProfileWidget.module.scss";
import Assets from "./Assets/Assets";
import History from "./History/History";

type Props = {};

export default function ProfileWidget({}: Props) {
  const [isAssets, setIsAssets] = useState(true);
  return (
    <div className={classes.ProfileWidget}>
      <div className={classes.tabs}>
        <h3
          className={isAssets ? classes.active : ""}
          onClick={() => setIsAssets(!isAssets)}
        >
          Assets
        </h3>
        <h3
          className={!isAssets ? classes.active : ""}
          onClick={() => setIsAssets(!isAssets)}
        >
          History
        </h3>
      </div>
      <hr />
      <div className={classes.content}>{isAssets ? <Assets /> : <History />}</div>
    </div>
  );
}
