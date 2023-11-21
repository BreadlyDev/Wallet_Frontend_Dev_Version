import React from 'react';
import styles from "./Nav.module.scss"
import NavItem from "./NavItem/NavItem.tsx";

const Nav: React.FC = () => {
    return <nav className={styles.Nav}>

        <ul>
            <li>
                <NavItem to={"/"}>Home</NavItem>
            </li>
            <li>
                <NavItem to={"/profile"}>profile</NavItem>
            </li><li>
            <NavItem to={"/demo"}>demo</NavItem>
        </li>

        </ul>
    </nav>;
};

export default Nav;
