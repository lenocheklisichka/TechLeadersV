import { createUseStyles } from "react-jss";
import { theme, Theme } from "../../theme";

const styles = (theme: Theme) => ({
  root: {
    padding: "20px 20px"
  },
  inputWrapper: {
    display: "grid",
    gridTemplateColumns: "100px 200px",
    gridRowGap: 5,
    marginBottom: 5
  },
  fillerDiv: {
    height: 3000
  }
})

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "AuthForm" });