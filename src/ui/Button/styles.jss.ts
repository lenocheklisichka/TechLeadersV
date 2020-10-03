import { createUseStyles } from "react-jss";

import { Theme } from "../../theme";

const styles = (theme: Theme) => ({
  root: {
    display: "inline-flex",
    padding: "5px 15px",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    height: 48,
    minWidth: 100,
    outline: "none",
    cursor: "pointer",
    fontSize: "1rem",
    borderWidth: 1,
    borderStyle: "solid",
    userSelect: "none",

    "&.fullWidth": {
      width: "100%",
    },

    "&.small": {
      height: 36,
    },

    "&.contained": {
      borderRadius: 7,

      "&.primary": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        borderColor: theme.palette.primary.main,

        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          borderColor: theme.palette.primary.dark,
        },
      },

      "&.secondary": {
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        borderColor: theme.palette.secondary.main,

        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
          borderColor: theme.palette.secondary.dark,
          boxShadow: "rgba(0, 191, 165, 0.3) 0px 0px 0px 4px",
        },
      },
    },

    "&.outlined": {
      borderRadius: 7,

      "&.primary": {
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,

        "&:hover": {
          backgroundColor: "#ededed",
        },
      },
    },

    "&.inline": {
      border: "none",
      minWidth: "unset",
      backgroundColor: "transparent",
      padding: "5px 10px",

      "&.secondary": {
        color: theme.palette.secondary.main,
      },
    },
  },
});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "UI_Button" });
