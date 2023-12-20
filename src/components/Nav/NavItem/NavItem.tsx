import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.scss";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  icon: string;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  children,
  isActive,
  onClick,
  icon,
}) => {
  return (
    <li
      className={
        isActive ? `${styles.NavItem} ${styles.active}` : styles.NavItem
      }
      onClick={onClick}
    >
      <NavLink to={to}>
        <img src={icon} alt="icons fur navlinks" />
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
