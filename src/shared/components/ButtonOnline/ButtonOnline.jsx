import css from "./button.module.css";

const ButtonOnline = ({ text, openModal }) => {
  return (
    <div>
      <button className={css.btn} onClick={openModal} type="submit">
        {text}
      </button>
    </div>
  );
};
export default ButtonOnline;
