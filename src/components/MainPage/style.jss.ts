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
    fontFamily: 'Montserrat, sans-serif',
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
    display: 'flex',
    width: '840px',
    margin: 'auto',
    paddingTop: '70px',
    justifyContent: "space-between"
  },

  boxDoctor: {
    display: 'flex',
    flexDirection: "column",
  },

  boxPatient: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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

  btnPatient: {
    padding: '23px 70px',
  },

  btnDoctor: {
    padding: '13px 50px',
  },
});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "MainPageMedicine" });
