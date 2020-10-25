import React from "react";

import useStyles from "../PatientPage/style.jss";
import phone from "../../../assets/images/phone.png";
import logo from "../../../assets/images/logo.png";
import patient from "../../../assets/images/petient.png";

export const MainPagePatient: React.FC = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <div className={classes.blockMain}>
        <div className={classes.navbarBox}>
          <p className={classes.navbarAdmin}>Административная штука</p>
          <div className={classes.navbarBoxPhone}>
            <div className={classes.boxPhone}>
              <p className={classes.navPhone}>8 800 123 45 67</p>
              <p className={classes.navDirectory}>Справочная служба 24 часа</p>
            </div>
            <div>
              <img src={phone}/>
            </div>
          </div>
        </div>
        <div className={classes.boxMedicalServices}>
          <div className={classes.boxLogo}>
            <div>
              <img src={logo}/>
            </div>
            <p className={classes.stateMed}>госмед</p>
          </div>
          <div className={classes.boxMedicine}>
            <p className={classes.publicMedicine}>Государственная медицина</p>
            <p className={classes.medicalPortal}>портал для медицинских услуг Российской федирации</p>
          </div>
        </div>
        <div className={classes.wrapBox}>
          <form className={classes.formBox}>
            <input type="text" value="ID Пользователь" className={classes.fieldInput}/>
            <input type="password" value="Пароль" 
              className={`${classes.fieldInput} ${classes.userPassword}`}/>
            <button className={classes.btnLog}>Вход</button>
          </form>
          <div className={classes.boxPhoto}>
            <img  className={classes.photoPatient} src={patient} />
          </div>
        </div>
      </div>
    </div>
  )
}