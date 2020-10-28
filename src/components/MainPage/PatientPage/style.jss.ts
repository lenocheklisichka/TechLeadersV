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
  },

  navbarAdmin: {
    fontSize: '14px',
    fontWeight:'400',
    color: '#fff',
  },

  navbarBoxPhone: {
    display: 'flex',
  },

  boxPhone: {
    paddingRight: '10px',
  },

  navPhone: {
    color: '#fff',
    fontSize: '18px',
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
    width: '900px',
    justifyContent: 'space-around',
    margin: 'auto',
    paddingTop: "50px",
  },

  boxLogo: {
    display: 'flex',
  },
  
  imgLogo: {
    width: "10vw",
  },

  stateMed: {
    textTransform: 'uppercase',
    color: '#ffa940',
    fontSize: '46px',
    fontWeight: '600',
    paddingLeft: '10px',
  },

  publicMedicine: {
    width: '230px',
    textTransform: 'uppercase',
    fontSize: '18px',
    fontWeight: '500',
    color: '#fff',
  },

  medicalPortal: {
    width: '380px',
    fontSize: '14px',
    color: '#fff',
  },

  boxMedicine: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },

  wrapBox: {
    width: "840px",
    display: "flex",
    margin: "70px auto 0",
    alignItems: "center",
    justifyContent: "space-between",
  },

  boxBtn: {
    backgroundColor: '#ffa940',
    color: '#fff',
    fontSize: '17px',
    fontWeight: '400',
    border: '0',
    borderRadius: '50px',
    marginTop: '50px',
    cursor: 'pointer',
    outline: 'none',
  },

  btnDoctor: {
    padding: '13px 50px',
  },

  photoPatient: {
    width: "25vw",
    height: "25vw",
  },

  formBox: {
    width: "22vw",
  },

  fieldInput: {
    width: "25vw",
    padding: "14px 23px",
    fontSize: "16px",
    fontWeight: "400",
    border: "1px solid #fff",
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
    borderRadius: "20px",
    fontSize: "18px",
    fontWeight: "400",
    cursor: "pointer",
    outline: "none",
    float: "left",
  },
});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "MainPagePatient" });