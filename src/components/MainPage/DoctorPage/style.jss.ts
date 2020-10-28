import { createUseStyles } from "react-jss";

import { Theme } from "../../../theme";
import backgroundBlockMain from "../../../assets/images/backgroundBlockMain.png";

const styles = (theme: Theme) => ({
  '@global': {
    body: {
        margin: "0",
        padding: "0",
    },

    p: {
      margin: "0",
    },
  },

  root: {
    color: theme.palette.text.primary,
  },
   
  blockMain: {
    backgroundImage: `url(${backgroundBlockMain})`,
    backgroundRepeat: 'no-repeat',
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    [theme.mediaRequests.desktop] : {
      paddingLeft: "20px",
      paddingRight: "20px",
    }
  },

  innerBox: {
    width: "100%",
    maxWidth: "1140px",
    margin: "0 auto",
  },

  navbarBox: {
    display: 'flex',
    paddingTop: '50px',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1140px',
    margin: 'auto',
    [theme.mediaRequests.notDesktop] : {
      width: "100%",
      maxWidth: "700px",
    },
  },

  navbarAdmin: {
    fontSize: '14px',
    fontWeight:'400',
    color: '#fff',
    [theme.mediaRequests.mobile] : {
      display: "none",
    },
  },

  navbarBoxPhone: {
    display: 'flex',
    [theme.mediaRequests.mobile] : {
      position: "absolute",
      left: "60%",
    }
  },

  boxPhone: {
    paddingRight: '10px',
    [theme.mediaRequests.mobile] : {
      paddingRight: "0",
    }
  },

  navPhone: {
    color: '#fff',
    fontSize: '18px',
    [theme.mediaRequests.mobile] : {
      fontSize: "2.5vw"
    }
  },

  navDirectory: {
    color: '#fff',
    fontSize: '14px',
    margin: '0',
  },

  imgPhone: {
    width: "6vw",
  },

  boxMedicalServices: {
    display: 'flex',
    width: '65vw',
    justifyContent: 'space-around',
    margin: 'auto',
    paddingTop: "50px",
    [theme.mediaRequests.notDesktop]: {
      width: "80vw",
      // flexDirection: "column",
    },
  },

  boxLogo: {
    display: "flex",
    [theme.mediaRequests.mobile] : {
      justifyContent: "center",
      flexDirection: "column",
      position: "absolute",
      left: "5%",
      top: "5%",
    }
  },

  imgLogo: {
    width: "10vw",
  },

  stateMed: {
    textTransform: 'uppercase',
    color: '#ffa940',
    fontSize: '3.4vw',
    fontWeight: '600',
    paddingLeft: '10px',
    alignItems: "center",
  },

  publicMedicine: {
    width: '18vw',
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: '500',
    color: '#fff',
    [theme.mediaRequests.notDesktop]: {
      width: "29vw",
    },
    [theme.mediaRequests.mobile]: {
      textAlign: "center",
    } as any
  },

  medicalPortal: {
    fontSize: '14px',
    color: '#fff',
    [theme.mediaRequests.mobile]: {
      textAlign: "center",
    },
  },

  boxMedicine: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    [theme.mediaRequests.tablet]: {
      display: "none",
    },
    [theme.mediaRequests.notDesktop]: {
      alignItems: "center",
    },
    [theme.mediaRequests.mobile]: {
      display: 'none',
    } as any
  },

  wrapBox: {
    width: "60vw",
    display: "flex",
    margin: "70px auto 0",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.mediaRequests.mobile] : {
      flexDirection: "column",
    }
  },

  formBox: {
    width: "22vw",
    [theme.mediaRequests.mobile] : {
      width: "35vw",
    }
  },

   fieldInput: {
    padding: "14px 23px",
    fontSize: "16px",
    fontWeight: "400",
    border: "0",
    borderRadius: "30px",
  },

  userPassword: {
    marginTop: "28px",
    marginBottom: "40px",
  },

  btnLog: {
    padding:"13px 72px",
    backgroundColor: "#ffa940",
    color: "#fff",
    border: "0",
    borderRadius: "30px",
    fontSize: "18px",
    fontWeight: "400",
    cursor: "pointer",
    outline: "none",
  },

  photoDoctor: {
    width: "25vw",
    height: "25vw",
  },
});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "MainPageDoctor" });