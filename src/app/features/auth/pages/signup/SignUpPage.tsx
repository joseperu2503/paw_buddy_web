import eyeClosed from "@assets/icons/eye-closed.svg";
import eyeOpen from "@assets/icons/eye-open.svg";
import logo from "@assets/icons/logo.svg";
import user from "@assets/icons/user.svg";
import dog from "@assets/images/dog.png";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import { signUp } from "../../services/auth.service";
import styles from "./SignUpPage.module.scss";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Email is invalid"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(50, { message: "Password must be at most 50 characters long" })
    .regex(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    }),
  acceptTerms: z.literal(true, "Accept terms and conditions"),
});

export function SigUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = handleSubmit(async (data) => {
    await signUp(data);
    navigate("/dashboard");
  });

  return (
    <div className={styles.background2}>
      <div className={styles.page}>
        <div className={styles.leftSide}>
          <img src={logo} alt="logo" className={styles.logo} />
          <img src={dog} alt="dog" className={styles.dog} />
        </div>

        <div className={styles.rightSide}>
          <form className={styles.card} onSubmit={onSubmit}>
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

              <div
                className={styles.form}
                onSubmit={handleSubmit((data) => console.log(data))}
              >
                <div className={styles.formItem}>
                  <input
                    type="text"
                    placeholder="Name"
                    className={`${styles.input} ${
                      errors.name ? styles.errorInput : ""
                    }`}
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className={styles.error}>{errors.name?.message}</span>
                  )}
                </div>

                <div className={styles.formItem}>
                  <input
                    type="email"
                    placeholder="Email"
                    className={`${styles.input} ${
                      errors.name ? styles.errorInput : ""
                    }`}
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className={styles.error}>
                      {errors.email?.message}
                    </span>
                  )}
                </div>

                <div className={styles.formItem}>
                  <div className={styles.passwordContainer}>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className={`${styles.input} ${
                        errors.name ? styles.errorInput : ""
                      }`}
                      {...register("password", { required: true })}
                    />
                    <img
                      src={showPassword ? eyeOpen : eyeClosed}
                      alt="eye-closed"
                      className={styles.eyeIcon}
                      onClick={togleShowPassword}
                    />
                  </div>
                  {errors.password && (
                    <span className={styles.error}>
                      {errors.password?.message}
                    </span>
                  )}
                </div>

                <div className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    {...register("acceptTerms")}
                  />
                  <p>Accept Terms and Conditions</p>
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <button type="submit" className={styles.button}>
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
          </form>
        </div>
      </div>
    </div>
  );
}
