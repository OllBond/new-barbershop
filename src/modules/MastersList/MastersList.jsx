import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import MastersItems from "../MastersItem/MastersItems";
import { getAllMasters } from "../../redux/masters/masters-selectors";
import { fetchMasters } from "../../redux/masters/masters-operations";

import css from "./masters-list.module.css";
import { useEffect } from "react";

const MastersList = () => {
  const allMasters = useSelector(getAllMasters);
  // console.log(allMasters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMasters());
  }, [dispatch]);

  return (
    <main>
      <section className={css.sectionMasters}>
        <div className={css.mastersWrapper}>
          <p className={css.text}>ЛАТИНСЬКОЮ "БАРБА" ОЗНАЧАЄ "БОРОДА"</p>
          <h2 className={css.title}>Наші майстри</h2>
          <ul className={css.listMasters}>
            {allMasters.map(({ id, avatar, name, subtitle }) => {
              return (
                <MastersItems
                  key={id}
                  avatar={avatar}
                  name={name}
                  subtitle={subtitle}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};
export default MastersList;

MastersList.defaultProps = {
  allMasters: [],
};
