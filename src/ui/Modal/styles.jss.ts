import { createUseStyles } from "react-jss";
import { Theme } from "../../theme";

const styles = (theme: Theme) => ({
  modal: {
    position: "fixed",
    display: "none",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",

    "&.isVisible": {
      display: "flex",
    },
  },
  
  overlay: {
    position: "absolute",
    display: "block",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 3,
    cursor: "pointer",
  },  

  popup: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 4,
    width: 752,
    height: '60%',
    maxWidth: "100%",

    [theme.mediaRequests.tablet]: {
      width: 500,
      height: "90%",
    },

    [theme.mediaRequests.mobile]: {
      width: "100%",
      height: "100%",
    },
  },

  popupClose: {
    position: "absolute",
    dispay: "block",
    right: 20,
    top: 0,
    cursor: "pointer",
    fontSize: 35,
    color: "#000",
    fontWeight: 300,
    zIndex: 5,
  },

  popupTitle: {
    display: "block",
    width: "100%",
    height: 71,
    lineHeight: "71px",
    margin: 0,
    backgroundColor: "#ffffff",
    color: theme.palette.text.primary,
    textTransform: "uppercase",
    fontSize: 21,
    fontWeight: 500,
    textAlign: "center",
  },

  popupContent: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    backgroundSize: "cover",
    padding: "35px 88px 50px",
    color: "#fff",
    minHeight: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexGrow: 2,

    [theme.mediaRequests.tablet]: {
      padding: "15px 20px 20px",
     },

    [theme.mediaRequests.mobile]: {
      padding: "5px 10px 15px",
     },

  },

 
});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "UI_Modal" });
