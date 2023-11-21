import React, {ReactNode} from 'react';
import Nav from "../Nav/Nav.tsx";
<<<<<<< HEAD
import styles from "./Layout.module.scss"
=======
import classes from './Layout.module.scss'
>>>>>>> 041d84b4b4b36261bf5f35c4e55c4766769ea36e
type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
<<<<<<< HEAD
        <div className={styles.Layout}>
=======
        <div className={classes.Layout}>
>>>>>>> 041d84b4b4b36261bf5f35c4e55c4766769ea36e
            <header>
                <Nav/>
            </header>
            <main className={styles.rightContainer}>
                {children}
            </main>
        </div>
    )
};

export default Layout;
