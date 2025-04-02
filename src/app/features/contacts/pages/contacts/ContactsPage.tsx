import noPets from "../../../../../assets/icons/no-pets.svg";
import { Button } from "../../../../shared/components/button/Button";
import styles from "./ContactsPage.module.scss";

export function ContactsPage() {
  return (
    <div className={styles.noPets}>
      <div className={styles.content}>
        <h1>Uh Oh!</h1>
        <p>
          Looks like you have no profiles set up at this moment, add your pet
          now
        </p>
        <img src={noPets} alt="" />
      </div>
      <div className={styles.buttons}>
        <Button className={styles.button} text="Add a pet now"></Button>
      </div>
    </div>
  );
}
