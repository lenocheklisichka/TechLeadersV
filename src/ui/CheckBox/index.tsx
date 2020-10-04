import React, {useCallback, useState} from "react";
import clsx from "clsx";

import useStyles from "./styles.jss";
import {CheckBoxProps} from "./types";


export const CheckBox: React.FC<CheckBoxProps> = (
    {
        className,
        onChange,
        name,
        label,
    }) => {


    const [check, setCheck] = useState(false);
    const handler = useCallback(() => {
        setCheck(!check);
    }, [check]);

    const classes = useStyles();

    return (
        <div>
            <label className={clsx(classes.root, {}, className)}>
                <input name={name} id={name} type="checkbox" checked={check} onChange={handler}/>
                <span>{label}</span>
            </label>
        </div>
    );
}
