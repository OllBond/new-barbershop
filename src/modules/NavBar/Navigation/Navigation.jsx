import { NavLink } from "react-router-dom";
import { useState, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import Button from "../../../shared/components/Button/Button";
import Modal from "../../../shared/components/ModalWindow/ModalWindow";
import OnlineRegisterForm from "../../OnlineRegisterForm/OnlineRegisterForm";

import css from "./navigation.module.css";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const mobileNav = (page) => {
    setNav(!nav);
    setCurrentPage(page);
  };
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <>
      <div
        className={
          nav ? `${css.navigateWrapper} ${css.active}` : css.navigateWrapper
        }
      >
        <NavLink
          to="/price"
          className={
            currentPage === "price" ? `${css.link} ${css.activeLink}` : css.link
          }
          onClick={() => mobileNav("price")}
        >
          Послуги та ціни
        </NavLink>
        <NavLink
          to="/masters"
          className={css.link}
          onClick={() => mobileNav("masters")}
        >
          Майстри
        </NavLink>
        <NavLink
          to="/contacts"
          className={css.link}
          onClick={() => mobileNav("contacts")}
        >
          Контакти
        </NavLink>
        <Button text="ОНЛАЙН-ЗАПИС" openModal={openModal} />
      </div>

      {showModal && (
        <Modal close={closeModal}>
          <OnlineRegisterForm />
        </Modal>
      )}
      <div className={css.mobileBtn} onClick={mobileNav}>
        {nav && <AiOutlineClose size={25} />}
        {!nav && <AiOutlineMenu size={25} />}
      </div>
    </>
  );
};

export default Navigation;
