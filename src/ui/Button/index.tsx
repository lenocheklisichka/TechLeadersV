import React from "react";
import clsx from "clsx";

import useStyles from "./styles.jss";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  children, fullWidth,
  color = "primary",
  className,
  type = "button",
  variant = "contained",
  size = "medium",
  onClick,
  ...props
}) => {
  const classes = useStyles();

  return (
    <button
      {...props}
      className={clsx(classes.root, {
        fullWidth,
        [`${variant}`]: true,
        [`${color}`]: true,
        [`${size}`]: true,
      }, className)}
      type={type}
      onClick={type === "submit" ? undefined : onClick}
    >
      {children}
    </button>
  );
}
