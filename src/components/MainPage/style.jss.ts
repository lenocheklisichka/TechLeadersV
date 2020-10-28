import { createUseStyles } from "react-jss";

import { Theme } from "../../theme";
import backgroundBlockMain from "../../assets/images/backgroundBlockMain.png";

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
    backgroundSize: "cover",
    
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
      paddingLeft: "10px",
      paddingRight: "10px",
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
    paddingRight: "10px",
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
    [theme.mediaRequests.mobile] : {
       fontSize: "2vw",
    }
  },

  imgPhone: {
     width: "4vw",
  },

  boxMedicalServices: {
    width: "65vw",
    display: 'flex',
    justifyContent: 'space-around',
    margin: '50px auto 60px',
    [theme.mediaRequests.notDesktop]: {
      width: "80vw",
    },
  },

  boxLogo: {
    display: 'flex',
    [theme.mediaRequests.mobile] : {
      justifyContent: "center",
      flexDirection: "column",
      position: 'absolute',
      left: "5%",
      top: "5%",
    }
  },

  imgLogo: {
    width: "10vw",
  },

  stateMed: {
    alignItems:"center",
    textTransform: 'uppercase',
    color: '#ffa940',
    fontSize: '3.4vw',
    fontWeight: '600',
    paddingLeft: '10px',
  },

  publicMedicine: {
    width: '18vw',
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: '500',
    color: '#fff',
    [theme.mediaRequests.tablet]: {
      width: '29vw',
    },
    [theme.mediaRequests.mobile]: {
      textAlign: 'center',
    } as any
  },

  medicalPortal: {
    fontSize: '14px',
    color: '#fff',
  },

  boxMedicine: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    width: "29vw",
    [theme.mediaRequests.tablet]: {
      display: "none",
    },
    [theme.mediaRequests.notDesktop]: {
      display: "none",
    },
    [theme.mediaRequests.mobile]: {
      display: "none",
    } as any
  },

  wrapBox: {
    display: 'flex',
    width: '60vw',
    margin: 'auto',
    alignItems: "center",
    justifyContent: "space-between",
    [theme.mediaRequests.notDesktop] : {
      width: "65vw",
    },
    [theme.mediaRequests.mobile] : {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    } as any
  }, 

  imgBlock: {
    width: "17vw",
  },

  boxDoctor: {
    display: 'flex',
    flexDirection: "column",
  },

  boxPatient: {
    display: 'flex',
    flexDirection: 'column',
    [theme.mediaRequests.mobile] : {
      paddingTop: "40px",
    }
  },

  boxBtn: {
    backgroundColor: '#ffa940',
    color: '#fff',
    fontSize: '17px',
    fontWeight: '400',
    border: "0",
    borderRadius: '50px',
    marginTop: '2vw',
    cursor: 'pointer',
    outline: 'none',
    [theme.mediaRequests.tablet] : {
      fontSize: "15px",
    },
    [theme.mediaRequests.mobile] : {
      fontSize: "13px",
    },
  },

  btnPatient: {
    padding: "23px 70px",
    [theme.mediaRequests.tablet] : {
      padding: "20px 17px",
    },
    [theme.mediaRequests.mobile] : {
      padding: "10px 12px",
    },
  },

  btnDoctor: {
    padding: "13px 50px",
    [theme.mediaRequests.tablet] : {
     padding: "10px 15px",
    },
    [theme.mediaRequests.mobile] : {
     padding: "8px 10px",
    },
  },

  photoDoctor: {
    width: "25vw",
    height: "25vw",
  },

  photoPatient: {
    width: "25vw",
    height: "25vw",
  },

  formBox: {
    width: "22vw",
    [theme.mediaRequests.mobile] : {
      marginTop: "30px",
      width: "35vw",
    },
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
});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "MainPageMedicine" });
