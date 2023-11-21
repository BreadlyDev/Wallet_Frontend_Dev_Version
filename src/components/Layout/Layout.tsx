import React, {ReactNode} from 'react';
import Nav from "../Nav/Nav.tsx";
import classes from './Layout.module.scss'
type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className={classes.Layout}>
            <header>
                <Nav/>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
};

export default Layout;
