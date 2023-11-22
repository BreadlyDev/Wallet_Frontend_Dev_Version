import React, {useState} from 'react';
import styles from './Nav.module.scss';
import NavItem from "./NavItem/NavItem.tsx";
import Logo from "../Logo/Logo.tsx";

import card from "./../../assets/icons/card.svg"
import dollar from "./../../assets/icons/dollar.svg"
import home from "./../../assets/icons/Home.svg"
import price from "./../../assets/icons/price.svg"
import user from "./../../assets/icons/user.svg"

const Nav: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleItemClick = (index: number) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    const navItems = [
        {to: '/', label: 'Home', icon: home},
        {to: '/demo-balance', label: 'Demo balance', icon: dollar},
        {to: '/trading', label: 'Trading', icon: card },
        {to: '/login', label: 'Prices', icon: price},
        {to: '/profile', label: 'Profile', icon: user},
    ];

    return (
        <nav className={styles.Nav}>
            <Logo/>
            <ul>
                {navItems.map((item, index) => (
                    <NavItem
                        key={index}
                        to={item.to}
                        isActive={index === activeIndex}
                        onClick={() => handleItemClick(index)}
                        icon={item.icon}
                    >
                        {item.label}
                    </NavItem>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
