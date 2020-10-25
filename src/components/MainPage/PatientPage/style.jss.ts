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

  navbarBox: {
    display: 'flex',
    paddingTop: '50px',
    justifyContent: 'space-between',
    width: '1100px',
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

  imagePhone: {
    paddingLeft: '10px',
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
    width: "846px",
    display: "flex",
    margin: "45px auto",
    alignItems: "center",
    justifyContent: "space-between",
  },

  boxBtn: {
    width: '300px',
    backgroundColor: '#ffa940',
    color: '#fff',
    fontSize: '17px',
    fontWeight: '400',
    border: '1px solid #ffa940',
    borderRadius: '50px',
    marginTop: '50px',
    cursor: 'pointer',
    outline: 'none',
  },

  btnDoctor: {
    padding: '13px 50px',
  },

  boxPhoto: {
    width: "400px",
    height: "420px",
  },

  photoPatient: {
    width: "100%",
    height: "100%",
  },

  formBox: {
    width: "255px",
    height: "209px",
  },

  fieldInput: {
    width: "250px",
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
    width: "185px",
    padding:"13px 72px",
    backgroundColor: "#ffa940",
    color: "#fff",
    border: "1px solid #ffa940",
    borderRadius: "20px",
    fontSize: "18px",
    fontWeight: "400",
    cursor: "pointer",
    outline: "none",
    float: "left",
  },
});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "MainPagePatient" });