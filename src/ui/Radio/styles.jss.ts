import { createUseStyles } from "react-jss";
import { Theme } from "../../theme";

/* Создано на основе примера: 
https://moderncss.dev/pure-css-custom-styled-radio-buttons/ */

const styles = (theme: Theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "min-content auto",
    fontSize: "1em",
    gridGap: ".3em",
    marginTop: ".2em",
    "&.primary": {
      color: theme.palette.text.primary
    },
    "&.secondary": {
      color: theme.palette.text.secondary
    },
    "&.isDisabled": {
      opacity: "50%"
    },
    "&.isNotDisabled": {
      cursor: "pointer",
      "&:hover $input + $checkmark": {
        backgroundColor: "#ccc"
      },
      "& $input": {
        "&:checked + $checkmark": {
          "&:before": {
            display: "block",
            backgroundColor: theme.palette.primary.main,
            width: ".5em",
            height: ".5em",
            borderRadius: "50%"
          }
        },
        "&:focus + $checkmark": {
          boxShadow: "0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor"
        }
      }
    }
  },
  radioInput: {
    display: "flex",
    alignItems: "center"
  },
  input: {
    opacity: 0,
    height: 0,
    width: 0
  },
  checkmark: {
    display: "grid",
    placeItems: "center",
    height: "1em",
    width: "1em",
    borderRadius: "50%",
    border: ".15em solid currentColor",
    backgroundColor: "white",
    "&:before": {
      content: '""',
      display: "none"
    }
  }
})

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "UI_Radio" });