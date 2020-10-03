import React from "react";

import useStyles from "./styles.jss";
import { useAppStore } from "../../store/AppStore";

export const Test: React.FC = () => {
  const [{ device }] = useAppStore();
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      {device.isMobile ? "MOBILE" : "DESKTOP"}
    </div>
  )
}