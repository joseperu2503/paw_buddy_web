import logo from "../../assets/icons/logo.svg";
import dog from "../../assets/images/dog.png";
import styles from "./HomePage.module.scss";

export function HomePage() {
  return (
    <div className={styles.page}>
      <img src={logo} alt="logo" className={styles.logo} />
      <img src={dog} alt="dog" className={styles.dog} />
    </div>
  );
}
