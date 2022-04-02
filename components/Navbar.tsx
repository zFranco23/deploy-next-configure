import React from "react";

import ActiveLink from "./ActiveLink";
import style from "./Navbar.module.css";


const menuItems = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "About",
    href: "/about"
  },
  {
    text: "Contact",
    href: "/contact"
  },
  {
    text: "Pricing",
    href: "/pricing"
  },
];
const Navbar = () => {
  return (
    <nav className={style.menuContainer}>
      {
        menuItems.map((link)=>(
          <ActiveLink key={link.href} href={link.href} text={link.text} />
        ))
      }
    </nav>

  );
};

export default Navbar;