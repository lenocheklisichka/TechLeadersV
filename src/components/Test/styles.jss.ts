import { createUseStyles } from "react-jss";

import { Theme } from "../../theme";

const styles = (theme: Theme) => ({
  root: {
    padding: 20,
    backgroundColor: "yellow",
    color: theme.palette.text.primary,
  },
});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "Component_Test" });
