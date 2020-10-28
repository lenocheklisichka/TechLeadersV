import React from "react";

import useStyles from ".././DoctorPage/style.jss";
import phone from "../../../assets/images/phone.png";
import logo from "../../../assets/images/logo.png";
import doctor from "../../../assets/images/doctor.png";

export const MainPageDoctor: React.FC = () =>  {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.blockMain}>
        <div className={classes.innerBox}>
          <div className={classes.navbarBox}>
            <p className={classes.navbarAdmin}>Административная штука</p>
            <div className={classes.navbarBoxPhone}>
              <div className={classes.boxPhone}>
                <p className={classes.navPhone}>8 800 123 45 67</p>
                <p className={classes.navDirectory}>Справочная служба 24 часа</p>
              </div>
              <div>
                <img src={phone} className={classes.imgPhone}/>
              </div>
            </div>
          </div>
          <div className={classes.boxMedicalServices}>
            <div className={classes.boxLogo}>
              <div>
                <img src={logo} className={classes.imgLogo}/>
              </div>
              <p className={classes.stateMed}>госмед</p>
            </div>
            <div className={classes.boxMedicine}>
              <p className={classes.publicMedicine}>Государственная медицина</p>
              <p className={classes.medicalPortal}>портал для медицинских услуг Российской федирации</p>
            </div>
          </div>
          <div className={classes.wrapBox}>
            <div>
              <img  className={classes.photoDoctor} src={doctor} />
            </div>
            <form className={classes.formBox}>
              <input type="text" value="ID Пользователь" className={classes.fieldInput}/>
              <input type="password" value="Пароль" 
                className={`${classes.fieldInput} ${classes.userPassword}`}/>
              <button className={classes.btnLog}>Вход</button>
            </form>
          </div>
        </div>
      </div>
    </div> 
  );
};