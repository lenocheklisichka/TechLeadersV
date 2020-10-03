import { createUseStyles } from "react-jss";

import { Theme } from "./theme";

const styles = (theme: Theme) => ({
  root: {
    textAlign: "center",
  },
  
  logo: {
    height: "40vmin",
    pointerEvents: "none",
    animation: "$spin infinite 20s linear",
  },
  
  header: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  
  link: {
    color: "#61dafb",
  },
  
  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "App" });
