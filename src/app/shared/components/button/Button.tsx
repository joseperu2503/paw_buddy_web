import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
}

export function Button({ className = "", text, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
