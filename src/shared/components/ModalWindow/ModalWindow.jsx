import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import css from "./modal-window.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ close, children }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeModal);

    return () => document.removeEventListener("keydown", closeModal);
  }, [closeModal]);

  return createPortal(
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <span className={css.close} onClick={close}>
          <AiOutlineClose />
        </span>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
