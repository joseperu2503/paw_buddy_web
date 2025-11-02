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
import styles from "./SignUpPage.module.scss";

const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Debe tener al menos 8 caracteres"),
});

export function SigUpPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [showPassword, setShowPassword] = useState(false);

  // const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   navigate("/dashboard");
  // };

  const togleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = handleSubmit((data) => console.log(data));

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
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.input}
                  {...register("name")}
                />
                {errors.name && <p>{errors.name?.message}</p>}

                <input
                  type="email"
                  placeholder="Email"
                  className={styles.input}
                  {...register("email", { required: true })}
                />
                {errors.email && <p>{errors.email?.message}</p>}

                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={styles.input}
                    {...register("password", { required: true })}
                  />
                  <img
                    src={showPassword ? eyeOpen : eyeClosed}
                    alt="eye-closed"
                    className={styles.eyeIcon}
                    onClick={togleShowPassword}
                  />
                </div>
                {errors.password && <p>{errors.password?.message}</p>}

                <div className={styles.checkboxContainer}>
                  <input type="checkbox" className={styles.checkbox} />
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
