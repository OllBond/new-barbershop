import css from "./masters-item.module.css";

const MastersItems = ({ avatar, name, subtitle }) => {
  return (
    <li>
      <img src={avatar} alt="Oles Kozackiy" width="255" load="lazy" />
      <div className={css.descriptionWrap}>
        <h3>{name}</h3>
        <p>{subtitle}</p>
      </div>
    </li>
  );
};

export default MastersItems;
