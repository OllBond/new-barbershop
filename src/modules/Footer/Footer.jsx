import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";

import css from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <section className={css.footer}>
        <div className={css.footerWrapper}>
          <h3 className={css.titleFooter}>Ми в соціальних мережах</h3>
          <ul className={css.list}>
            <li>
              <NavLink to="https://www.instagram.com/frisorworkshop/">
                <BsInstagram className={css.iconsSocial} />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.facebook.com/FrisorBarbershop/">
                <BsFacebook className={css.iconsSocial} />
              </NavLink>
            </li>
          </ul>
        </div>
        <p className={css.textCopyRight}>
          <AiOutlineCopyright /> Copyright 2023
        </p>
      </section>
    </footer>
  );
};
export default Footer;
