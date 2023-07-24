import css from "./main.module.css";
const Main = () => {
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
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
