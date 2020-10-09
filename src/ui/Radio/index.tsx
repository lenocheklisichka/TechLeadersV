import React from "react";
import clsx from "clsx";

import useStyles from "./styles.jss";
import { RadioProps } from "./types";

export const Radio: React.FC<RadioProps> = ({ label, name, value, className, isDisabled, onChange,
  color = "primary" }) => {
  const classes = useStyles();

  return (
    <label className={clsx(classes.root, {
      [`${color}`]: true,
      [`${isDisabled ? "isDisabled" : "isNotDisabled"}`]: true
    }, className)}>
      <span className={classes.radioInput}>
        <input type="radio" name={name} value={value} disabled={isDisabled} onChange={onChange} className={classes.input} />
        <span className={classes.checkmark}></span>
      </span>
      <span>{label}</span>
    </label>
  );
}