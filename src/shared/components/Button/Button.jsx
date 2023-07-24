import css from "./button.module.css";

const Button = ({ text, openModal }) => {
  return (
    <div>
      <button className={css.btn} onClick={openModal} type="submit">
        {text}
      </button>
    </div>
  );
};
export default Button;
