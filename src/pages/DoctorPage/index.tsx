import React, { useEffect, useState } from 'react';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import useStyles from "./styles.jss";
import { generateId } from '../../helpers/helpFunctions';
import photoUrl from './../../assets/images/doctorsPhoto/doctor1/doctor1.jpg'
import dyplom1 from './../../assets/images/doctorsPhoto/doctor1/gallery/1.jpg'
import dyplom2 from './../../assets/images/doctorsPhoto/doctor1/gallery/2.jpg'
import dyplom3 from './../../assets/images/doctorsPhoto/doctor1/gallery/3.jpg'
import dyplom4 from './../../assets/images/doctorsPhoto/doctor1/gallery/4.jpg'
import dyplom5 from './../../assets/images/doctorsPhoto/doctor1/gallery/5.jpg'
import avatar1 from './../../assets/images/doctorsPhoto/doctor1/reviews/rewiew1/avatar.jpg'
import avatar2 from './../../assets/images/doctorsPhoto/doctor1/reviews/rewiew2/avatar.jpg'
import { DoctorType } from './types';
import HttpService from '../../services/HttpService';
import { Link } from 'react-router-dom';


const mock = new MockAdapter(axios, { delayResponse: 1000 });

mock.onGet("/doctor-page").reply(200, {
    id: generateId(6),
    firstName: 'Иван',
    middleName: 'Иванович',
    lastName: 'Иванов',
    age: 35,
    photo: photoUrl,
    about: {
      specialization: 'Врач-терапевт',
      category: "Высшая",
      degree: 'Кандидат медицинских наук',
      education: [
        {
          organizationName: 'Воронежская государственная медицинская академия',
          programmName: 'Факультет общей практики',          
          graduationDate: new Date(2015, 6).toISOString(),
          studyDuration: '6 лет',
        },
        {
          organizationName: 'Институт повышения квалификации',
          programName: 'Методика работы с больными COVID-19',          
          graduationDate: new Date(2020, 3).toISOString(),
          studyDuration: '1 мес',
        },
      ],

      workExperience: [
        {
          organizationName: 'Компания «МедЭксперт» (ООО «МедЭксперт»)',
          from: new Date(2015, 6).toISOString(),
          to: new Date(2017, 1).toISOString(),
          position: 'Терапевт общей практики'
        },
        {
          organizationName: 'БУЗ ВО «Воронежская областная клиническая больница»',
          from: new Date(2017, 2).toISOString(),
          to: new Date().toISOString(),
          position: 'Заведующая терапевтическим отделением'
        },        
      ],

      gallery: [dyplom1, dyplom2, dyplom3, dyplom4, dyplom5],

      schedule: [
        {
          organizationId: generateId(5),
          organizationName: 'ООО «МедЭксперт»',
          workingTime: [
            {day: 'понедельник', time: '8.00 : 13.00'},
            {day: 'среда', time: '8.00 : 13.00'},
            {day: 'пятница', time: '8.00 : 13.00'},
          ],          
        },
        {
          organizationId: generateId(5),
          organizationName: 'БСМП>',
          workingTime: [
            {day: 'понедельник', time: '15.00 : 17.00'},
            {day: 'вторник', time: '8.00 : 17.00'},
            {day: 'среда', time: '15.00 : 17.00'},
            {day: 'четверг', time: '8.00 : 17.00'},
            {day: 'пятница', time: '15.00 : 17.00'},
          ],          
        },
      ]    

    },

    contacts: {
      phone: '+7(473)234-5599',
      skype: '@IvanovII',
      email: 'ivanov@yandex.ru'
    },

    reviews: [
      {
        id: generateId(3),
        name: 'Лена Летучая',
        avatar: avatar1,
        raiting: 5,
        countOfreviews: 1,
        countOfLikes: 0,
        textReview: 'Хороший доктор, очень помог',
      },
      {
        id: generateId(3),
        name: 'Екатерина Иванченко',
        avatar: avatar2,
        raiting: 2,
        countOfreviews: 101,
        countOfLikes: 1,
        textReview: 'Говорил очень много непонятных слов и содрал кучу бабла. Не рекомендую',
      }
    ]
  },
);

const DoctorPage: React.FC = () => {
  const classes = useStyles();
  const [currentDoctor, setCurrentDoctor] = useState<DoctorType>();

  useEffect(() => {
    (async () => {
      const response = await HttpService.get<DoctorType>("/doctor-page");
      setCurrentDoctor(res => res = response);
    })();
  }, []);

  return(
    <div className = {classes.mainWrp}>
      <div><Link to='/'>На главную</Link></div>
      <div className = {classes.titleWrp}><h1>{currentDoctor && `${currentDoctor.lastName} ${currentDoctor.firstName} ${currentDoctor.middleName}`}</h1>
      </div>
      <div className = {classes.descriptionWrp}>
        <div></div>
        <div></div>
      </div>
      <div className = {classes.scheduleWrp}><h1>График работы</h1></div>
      <div className = {classes.workExperienceWrp}><h1>Опыт работы</h1></div>
      <div className= {classes.educationWrp}><h1>Образование</h1></div>
      <div className= {classes.galleryWrp}><h1>Дипломы</h1></div>
      <div className= {classes.reviewsWrp}><h1>Отзывы</h1></div>
        
    </div>
  )
}

export default DoctorPage;