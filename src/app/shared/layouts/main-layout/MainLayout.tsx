import { NavLink, Outlet } from "react-router";
import account from "../../../../assets/icons/account.svg";
import calendar from "../../../../assets/icons/calendar.svg";
import contacts from "../../../../assets/icons/contacts.svg";
import dashboard from "../../../../assets/icons/dashboard.svg";
import logo2 from "../../../../assets/icons/logo-2.svg";
import plus from "../../../../assets/icons/plus.svg";
import settings from "../../../../assets/icons/settings.svg";
import { SvgIcon } from "../../components/svg-icon/SvgIcon";
import styles from "./MainLayout.module.scss";

export const MainLayout = () => {
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
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <SvgIcon path={dashboard} className={styles.svg} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <SvgIcon path={contacts} className={styles.svg} />
            <span>Contacts</span>
          </NavLink>
          <NavLink
            to="/calendar"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <SvgIcon path={calendar} className={styles.svg} />
            <span>Calendar</span>
          </NavLink>
        </div>
        <hr />
        <div className={styles.links}>
          <NavLink
            to="/account"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <SvgIcon path={account} className={styles.svg} />
            <span>Account</span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <SvgIcon path={settings} className={styles.svg} />
            <span>Settings</span>
          </NavLink>
        </div>
        {/* <div className={styles.profile}>
          <img src={profile} alt="" className={styles.profileImage} />
          <div className={styles.profileName}>
            <span className={styles.greeting}>Hello</span>
            <span className={styles.profileNameText}>Esther</span>
          </div>

          <img src={logout} alt="" className={styles.logout} />
        </div> */}
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
