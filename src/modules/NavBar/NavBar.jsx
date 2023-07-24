import { NavLink } from "react-router-dom";

import LogoIcon from "../../icons/LogoIcon";
import Navigation from "./Navigation/Navigation";

import css from "./navbar.module.css";

const NavBar = () => {
  return (
    <>
      <header>
        <div className={css.navbar}>
          <NavLink to="/">
            <LogoIcon />
          </NavLink>
          <Navigation />
        </div>
      </header>
    </>
  );
};
export default NavBar;
