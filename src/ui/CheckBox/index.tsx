import React from "react";
import useStyles from "./styles.jss";
import {CheckBoxProps} from "./types";


export const CheckBox: React.FC<CheckBoxProps> = (
    {
        className,
        onChange,
        name,
        label,
        checked,
        disabled
    }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <label className={classes.check}>
                <input
                    className={classes.check_input}
                    name={name}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
                <span className={classes.check_box}></span>
                <span>{label}</span>
            </label>
        </div>
    );
}
