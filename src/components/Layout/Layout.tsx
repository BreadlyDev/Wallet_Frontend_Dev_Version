import React, { ReactNode } from "react";
import Nav from "../Nav/Nav.tsx";

import styles from "./Layout.module.scss";
import BalanceWidget from "../BalanceWidget/BalanceWidget.tsx";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <header>
        <Nav />
      </header>
      <main className={styles.rightContainer}>
        <BalanceWidget />

        {children}
      </main>
    </div>
  );
};
export default Layout;
