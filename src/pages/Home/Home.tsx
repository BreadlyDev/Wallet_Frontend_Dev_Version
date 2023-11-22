import React from "react";
import BalanceWidgetList from "../../components/BalanceWidget/BalanceWidget";
import CoinWidgetList from "../../components/CoinWidget/CoinWidget";

const Home: React.FC = () => {
  return (
    <div>
      <BalanceWidgetList/>
      <CoinWidgetList/>
    </div>
  );
};

export default Home;
