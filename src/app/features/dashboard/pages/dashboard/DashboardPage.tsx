import account from "../../../../../assets/icons/account.svg";
import calendar from "../../../../../assets/icons/calendar.svg";
import contacts from "../../../../../assets/icons/contacts.svg";
import dashboard from "../../../../../assets/icons/dashboard.svg";
import logo2 from "../../../../../assets/icons/logo-2.svg";
import logout from "../../../../../assets/icons/logout.svg";
import noPets from "../../../../../assets/icons/no-pets.svg";
import plus from "../../../../../assets/icons/plus.svg";
import settings from "../../../../../assets/icons/settings.svg";
import profile from "../../../../../assets/images/profile.png";
import { Button } from "../../../../shared/components/button/Button";
import styles from "./DashboardPage.module.scss";

export function DashboardPage() {
  return (
    <div className={styles.background}>
      <div className={styles.sidebar}>
        <section className={styles.logoContainer}>
          <img src={logo2} alt="logo" />
        </section>
        <hr />
        <section className={styles.pets}>
          <span className={styles.title}>Your Pets</span>
          <div className={styles.petsList}>
            <div className={styles.pet}>
              <button>
                <img src={plus} alt="plus" className={styles.plus} />
              </button>
              <span>add new</span>
            </div>
          </div>
        </section>
        <hr />

        <div className={styles.links}>
          <a className={styles.active}>
            <img src={dashboard} alt="dashboard" />
            <span>Dashboard</span>
          </a>
          <a href="#">
            <img src={contacts} alt="contacts" />
            <span>Contacts</span>
          </a>
          <a href="#">
            <img src={calendar} alt="calendar" />
            <span>Calendar</span>
          </a>
        </div>
        <hr />
        <ul className={styles.links}>
          <a href="#">
            <img src={account} alt="account" />
            <span>Account</span>
          </a>
          <a href="#">
            <img src={settings} alt="settings" />
            <span>Settings</span>
          </a>
        </ul>
        <div className={styles.profile}>
          <img src={profile} alt="" className={styles.profileImage} />
          <div className={styles.profileName}>
            <span className={styles.greeting}>Hello</span>
            <span className={styles.profileNameText}>Esther</span>
          </div>

          <img src={logout} alt="" className={styles.logout} />
        </div>
      </div>
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
