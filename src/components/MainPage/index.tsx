import React, { useState } from "react";

import phone from "../../assets/images/phone.png";
import logo from "../../assets/images/logo.png";
import doctor1 from "../../assets/images/doctor1.png";
import patient from "../../assets/images/patient.png";
import doctor from "../../assets/images/doctor.png";
import useStyles from "./style.jss";
import {useAppStore} from "../../store/AppStore"

type HomePageState = "default" | "doctor-page" | "page-patient";

export const MainPageMedicine: React.FC = () =>  {
  const [page, setPage] = useState<HomePageState>("default");
  const classes = useStyles();
  const [{device}] = useAppStore();
  return( 
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
              <p className={classes.medicalPortal}>портал для медицинских услуг Российской федерации</p>
            </div>
          </div>
          {page === "default" && (
            <div className={classes.wrapBox}>
              <div className={classes.boxDoctor}>
                <div>
                  <img src={doctor1} className={classes.imgBlock}/>
                </div>
                <div>
                  <button className={`${classes.boxBtn} ${classes.btnDoctor}`}
                    onClick={() => setPage("doctor-page")}>
                    Войти как <br></br> медицинский сотрудник
                  </button>
                </div>
              </div>
              <div className={classes.boxPatient}>
                <div>
                  <img src={patient} className={classes.imgBlock}/>
                </div>
                <button className={`${classes.boxBtn} ${classes.btnPatient}`} 
                  onClick={() => setPage("page-patient")}>
                  Войти как пациент
                </button>
              </div>
            </div>
          )}
          {page === "doctor-page" && (
            <div className={classes.wrapBox}>
              <div>
                <img className={classes.photoDoctor} src={doctor} />
              </div>
              <form className={classes.formBox}>
                <input type="text" value="ID Пользователь" className={classes.fieldInput}/>
                <input type="text" value="Пароль" 
                className={`${classes.fieldInput} ${classes.userPassword}`}/>
                <button className={classes.btnLog}>Вход</button>
              </form>
            </div>
          )}
          {page === "page-patient" && (
            <div className={classes.wrapBox}>
              <form className={classes.formBox}>
                <input type="text" value="ID Пользователь" className={classes.fieldInput}/>
                <input type="text" value="Пароль" 
                className={`${classes.fieldInput} ${classes.userPassword}`}/>
                <button className={classes.btnLog}>Вход</button>
              </form>
              <div>
                <img className={classes.photoPatient} src={patient} />
              </div>
            </div>
          )}
          {device.isMobile? "ismobile": "notmobile"}
        </div>
      </div>
    </div>
  )
}