// NavItem.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.module.scss';

interface NavItemProps {
    to: string;
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
    icon: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, isActive, onClick, icon }) => {
    return (
        <li className={isActive ? `${styles.NavItem} ${styles.active}` : styles.NavItem} onClick={onClick}>
            <img src={icon} alt="icons fur navlinks" />
            <Link to={to}>{children}</Link>
        </li>
    );
};

export default NavItem;
