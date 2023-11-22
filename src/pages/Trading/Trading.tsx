import React from "react";
import styles from "./Trading.module.scss"
import CoinList from "../../components/CoinWidget/CoinList";

const Trading: React.FC = () => {
    return (
        <div className={styles.Trading}>
            <CoinList/>
        </div>
    )
}

export default Trading;