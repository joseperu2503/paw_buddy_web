import { NoPets } from "../../components/no-pets/NoPets";
import styles from "./DashboardPage.module.scss";

export function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <NoPets></NoPets>
      {/* <PetProfile></PetProfile> */}
    </div>
  );
}
