import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

import css from "./contacts-list.module.css";

const ContactsList = () => {
  return (
    <main>
      <section className={css.sectionContacts}>
        <h2 className={css.title}>Контакти</h2>
        <ul className={css.contactList}>
          <li className={css.contactItem}>
            <Link to="https://goo.gl/maps/gE9yczNd53fkCgTv8">
              <HiOutlineLocationMarker className={css.contactsIcon} />
            </Link>
            вул. Антоновича, 50, Київ, 02000
          </li>
          <li className={css.contactItem}>
            <Link></Link>
            <BsTelephone className={css.contactsIcon} />
            +38(050)52-64-993
          </li>
          <li className={css.contactItem}>
            <Link></Link> <TfiEmail className={css.contactsIcon} />
            barbershop@gmail.com
          </li>
        </ul>
      </section>
    </main>
  );
};
export default ContactsList;
