import React from "react";
import styles from "./Trading.module.scss"
import CoinChart from "../../components/CoinChart/CoinChart.tsx";

const Trading: React.FC = () => {
    return (
        <div className={styles.Trading}>
            <CoinChart/>
        </div>
    )
}

export default Trading;