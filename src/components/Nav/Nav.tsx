import React, {useState} from 'react';
import styles from './Nav.module.scss';
import NavItem from "./NavItem/NavItem.tsx";
import Logo from "../Logo/Logo.tsx";

import explore from '../../../src/assets/icons/explore.svg';
import profile from '../../../src/assets/icons/profile.svg';
import swap from '../../../src/assets/icons/swap.svg';
const Nav: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleItemClick = (index: number) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    const navItems = [
        {to: '/', label: 'Explore', icon: explore},
        {to: '/profile', label: 'Profile', icon: profile},
        {to: '/swap', label: 'Swap Tokens', icon: swap },
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
