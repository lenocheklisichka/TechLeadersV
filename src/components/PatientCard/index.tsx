import React from 'react';
import clsx from 'clsx';

import { patientsData } from '../../mocks/patients-data';
import useStyles from "./styles.jss";
import { useParams } from 'react-router';

type IParams = {
  id: string;
};

const PatientCard: React.FC = () => {
  const classes = useStyles();
  const params = useParams<IParams>();
  const patientData = patientsData.find(({ id }) => id === params.id);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.title}>Карточка пациента</h1>
        <ul className={clsx(classes.listReset, classes.patientInfo)}>
          <li className={classes.patientItem}>
            <h2 className={classes.subtitle}>ФИО:</h2>
            <p className={classes.text}>{patientData?.name}</p>
          </li>
          <li className={classes.patientItem}>
            <h2 className={classes.subtitle}>Полис:</h2>
            <p className={classes.text}>{patientData?.policy}</p>
          </li>
          <li className={classes.patientItem}>
            <h2 className={classes.subtitle}>Закрепленная поликлиника:</h2>
            <p className={classes.text}>{patientData?.polyclinic}</p>
          </li>
          <li className={classes.patientItem}>
            <h2 className={classes.subtitle}>Прививки:</h2>
            <ul>
              {patientData?.vaccinations.map(({ id, name }) => <li key={id}>{name}</li>)}
            </ul>
          </li>
          <li className={classes.patientItem}>
            <h2 className={classes.subtitle}>Уточненные диагнозы:</h2>
            <ul>
              {patientData?.diagnoses.map(({ id, name }) => <li key={id}>{name}</li>)}
            </ul>
          </li>
          <li className={classes.patientItem}>
            <h2 className={classes.subtitle}>Медосмотры:</h2>
            <ul>
              {patientData?.medical_examinations.map(({ id, date, name }) =>
                <li key={id}><strong>{date}</strong> <span>{name}</span></li>)}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default PatientCard;
