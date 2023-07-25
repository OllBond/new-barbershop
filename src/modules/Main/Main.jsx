import { useState, useCallback } from "react";

import ButtonOnline from "../../shared/components/ButtonOnline/ButtonOnline";
import Modal from "../../shared/components/ModalWindow/ModalWindow";
import OnlineRegisterForm from "../../modules/OnlineRegisterForm/OnlineRegisterForm";

import css from "./main.module.css";

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <main>
      <section className={css.sectionMain}>
        <p className={css.text}>A HAIR SALON FOR MEN IN KYIV</p>
        <div className={css.mainWrapper}>
          <h1 className={css.title}>BarberShop</h1>
          <div className={css.textWrapper}>
            <p className={css.text}>
              Ми експерти в модних зачісках для чоловіків.
            </p>
            <ButtonOnline text="ОНЛАЙН-ЗАПИС" openModal={openModal} />
            {showModal && (
              <Modal close={closeModal}>
                <OnlineRegisterForm />
              </Modal>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
