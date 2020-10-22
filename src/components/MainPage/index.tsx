import React, { useState } from "react";

import phone from "../../assets/images/phone.png"
import logo from "../../assets/images/logo.png"
import doctor1 from "../../assets/images/doctor1.png"
import patient from "../../assets/images/patient.png"
import useStyles from "./style.jss";

type HomePageState = "default" | "doctor-page" | "page-patient";

export const MainPageMedicine: React.FC = () =>  {
  const [page, setPage] = useState<HomePageState>("default");
  const classes = useStyles();
  return( 
    <div className={classes.root}>
      {page === "default" && (
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
            <div className={classes.boxDoctor}>
              <div>
                <img src={doctor1}/>
              </div>
              <button className={`${classes.boxBtn} ${classes.btnDoctor}`}
                onClick={() => setPage("doctor-page")}>
                Войти как <br></br> медицинский сотрудник
              </button>
            </div>
            <div className={classes.boxPatient}>
              <div>
                <img src={patient}/>
              </div>
              <button className={`${classes.boxBtn} ${classes.btnPatient}`} 
                onClick={() => setPage("page-patient")}>
                Войти как пациент
              </button>
            </div>
          </div>
        </div>
      )};
    </div>
  );
};