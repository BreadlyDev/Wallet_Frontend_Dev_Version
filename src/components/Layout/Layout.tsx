import React, {ReactNode} from 'react';
import Nav from "../Nav/Nav.tsx";

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
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
