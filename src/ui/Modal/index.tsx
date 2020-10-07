import React from "react";
import clsx from "clsx";
import useStyles from "./styles.jss";
import { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = ({
  children, 
   ...props
}) => {
  const classes = useStyles();
  
  return (
    <div className={clsx(classes.modal, {isVisible: props.open})}>

        <div 
          className={classes.overlay}
          onClick = {props.onClose}>         
        </div>

        <div className={classes.popup}>

            <div className={classes.popupClose} onClick = {props.onClose}>&times;
            </div>

            <div className={classes.popupTitle}>
              {props.title}
            </div>

            <div className={classes.popupContent}>
              {children}
            </div>

        </div>

    </div>
  );
}
