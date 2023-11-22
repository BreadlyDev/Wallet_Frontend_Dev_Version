import React from "react";
import BalanceWidget from "../../components/BalanceWidget/BalanceWidget";

const Home: React.FC = () => {
  return (
    <div>
        <BalanceWidget title="Balance">$132 324</BalanceWidget>
    </div>
  );
};

export default Home;
