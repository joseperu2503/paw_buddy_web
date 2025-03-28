import logo from "../../assets/icons/logo.svg";
import dog from "../../assets/images/dog.png";

import styles from "./SignUpPage.module.scss";

export function SigUpPage() {
  return (
    <div className={styles.background2}>
      <div className={styles.page}>
        <div className={styles.leftSide}>
          <img src={logo} alt="logo" className={styles.logo} />
          <img src={dog} alt="dog" className={styles.dog} />
        </div>

        <div className={styles.rightSide}>
          <div className={styles.card}>
            <div className={styles.topSide}>
              <h1 className={styles.title}>Create account</h1>
              <p className={styles.description}>
                Welcome! Please enter your information below and get started.
              </p>

              <form className={styles.form}>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.input}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.input}
                />
              </form>
            </div>

            <div className={styles.buttons}>
              <button type="submit" className={styles.button}>
                Create account
              </button>
              <p className={styles.footerText}>
                Already have an account?{" "}
                <a href="/login" className={styles.link}>
                  Log in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
