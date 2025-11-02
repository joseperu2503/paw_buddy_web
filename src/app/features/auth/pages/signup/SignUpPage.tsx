import eyeClosed from "@assets/icons/eye-closed.svg";
import eyeOpen from "@assets/icons/eye-open.svg";
import logo from "@assets/icons/logo.svg";
import user from "@assets/icons/user.svg";
import dog from "@assets/images/dog.png";

import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./SignUpPage.module.scss";

export function SigUpPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  const togleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.background2}>
      <div className={styles.page}>
        <div className={styles.leftSide}>
          <img src={logo} alt="logo" className={styles.logo} />
          <img src={dog} alt="dog" className={styles.dog} />
        </div>

        <div className={styles.rightSide}>
          <div className={styles.card}>
            <div className={styles.mainIcon}>
              <div className={styles.decorator}>
                <img src={user} alt="user" className={styles.icon} />
              </div>
            </div>
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

                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={styles.input}
                  />
                  <img
                    src={showPassword ? eyeOpen : eyeClosed}
                    alt="eye-closed"
                    className={styles.eyeIcon}
                    onClick={togleShowPassword}
                  />
                </div>
                <div className={styles.checkboxContainer}>
                  <input type="checkbox" className={styles.checkbox} />
                  <p>Accept Terms and Conditions</p>
                </div>
              </form>
            </div>

            <div className={styles.buttons}>
              <button
                type="submit"
                className={styles.button}
                onClick={handleSubmit}
              >
                Create account
              </button>

              <button type="button" className={styles.textButton}>
                <p className={styles.footerText}>
                  Already have an account?{" "}
                  <a href="/login" className={styles.link}>
                    Log in here
                  </a>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
