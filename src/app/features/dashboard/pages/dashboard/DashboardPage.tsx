import noPets from "../../../../../assets/icons/no-pets.svg";
import { Button } from "../../../../shared/components/button/Button";
import styles from "./DashboardPage.module.scss";

export function DashboardPage() {
  return (
    <div className={styles.background}>
      <div className={styles.sidebar}></div>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.noPets}>
            <div className={styles.content}>
              <h1>Uh Oh!</h1>
              <p>
                Looks like you have no profiles set up at this moment, add your
                pet now
              </p>
              <img src={noPets} alt="" />
            </div>
            <div className={styles.buttons}>
              <Button className={styles.button} text="Add a pet now"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
