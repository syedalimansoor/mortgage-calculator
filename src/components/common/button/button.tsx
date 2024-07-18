import {
  ComponentProps,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
} from "react";
import styles from "./button.module.css";
import clsx from "clsx";

interface Props extends ComponentProps<"button"> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "link";
  startIcon?: ReactNode;
}

function Button({ startIcon, ...props }: PropsWithChildren<Props>) {
  const { children, onClick, variant = "primary" } = props;

  const classes = clsx({
    [styles.primary]: variant === "primary",
    [styles.link]: variant === "link",
  });

  return (
    <button {...props} onClick={onClick} className={classes}>
      {startIcon}
      {children}
    </button>
  );
}
export default Button;
