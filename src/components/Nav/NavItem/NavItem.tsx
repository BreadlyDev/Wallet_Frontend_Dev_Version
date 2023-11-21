import React, { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

type NavItemProps = NavLinkProps & {
    children: ReactNode;
    to: string; // Исправлено на строковый тип (string)
};

const NavItem: React.FC<NavItemProps> = ({ children, to, ...rest }) => {
    return <NavLink {...rest} to={to}>{children}</NavLink>;
};

export default NavItem;
