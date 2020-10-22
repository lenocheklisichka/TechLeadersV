import React,{ useState } from "react";

import useStyles from ".././DoctorPage/style.jss";
import phone from "../../../assets/images/phone.png";
import logo from "../../../assets/images/logo.png";
import doctor from "../../../assets/images/doctor.png";

type HomePageState = "default" | "doctor-page" | "page-patient";

export const MainPageDoctor: React.FC = () =>  {
  const classes = useStyles();
  const [page, setPage] = useState<HomePageState>("doctor-page");
  return (
    <div className={classes.root}>
      {page === "doctor-page" && (
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
            <form>
              <input type="text" name="name">ID Пользователь</input>
              <input type="password">Пароль</input>
              <button>Вход</button>
            </form>
            <button className={`${classes.boxBtn} ${classes.btnDoctor}`}
              onClick={() => setPage("default")}>
              Перейти на главную страницу
            </button>
            <div>
              <img src={doctor} />
            </div>
          </div>
        </div>
      )};
    </div> 
  );
};