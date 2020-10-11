import { createUseStyles } from "react-jss";
import { theme, Theme } from "../../theme";

const styles = (theme: Theme) => ({
  root: {
    
  },
  inputWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 100px)",
    gridTemplateRows: "repeate(2, 40px)"
  }
})

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "AuthForm" });