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
import { DateTime } from 'luxon';
import clsx from "clsx";
import likeIcon from './../../assets/images/like.png';


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
          programmName: 'Методика работы с больными COVID-19',          
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
          position: 'Заведующий терапевтическим отделением'
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
          organizationName: 'БСМП',
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
        textReview: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, reprehenderit. Impedit ipsum laboriosam ducimus rem vitae corrupti molestias debitis nesciunt fugit? Reprehenderit consectetur sit nemo tenetur deserunt inventore vitae sequi amet in impedit ut at dolore hic harum explicabo quibusdam, voluptatibus ipsum quasi eligendi, sint quisquam, commodi perferendis qui voluptatem.',
      }
    ]
  },
);

const DoctorPage: React.FC = () => {
  const classes = useStyles();
  const [currentDoctor, setCurrentDoctor] = useState<DoctorType>();
  const [witchDiplomClicked, setwitchDiplomClicked] = useState(0);
  useEffect(() => {
    (async () => {
      const response = await HttpService.get<DoctorType>("/doctor-page");
      setCurrentDoctor(res => res = response);
    })();
  }, []);

  const sheduleItems = currentDoctor?.about.schedule.map(organization => {
    return <div key = {organization.organizationId} >
            <h4>{organization.organizationName}</h4>
            <div>
            {organization.workingTime.map(day => <p>{`${day.day} - ${day.time}`}</p> )}
            </div>            
          </div>
  })

  const workExperienceItems = currentDoctor?.about.workExperience.map(organization => {
    let workTimeFrom = DateTime.fromISO(organization.from);
    let workTimeTo = DateTime.fromISO(organization.to);
    return <div key = {organization.organizationName}>
            <h4>{organization.organizationName}</h4>
            <p>{`c ${workTimeFrom.toFormat('MM.yyyy')} по ${workTimeTo.toFormat('MM.yyyy')}`}</p>
            <p>{organization.position}</p>
          </div>
  })

  const educationItems = currentDoctor?.about.education.map(organization => {
    let graduationDate = DateTime.fromISO(organization.graduationDate);

    return <div key={organization.organizationName}>
            <h4>{organization.organizationName}</h4>
            <p>{ organization.programmName}</p>
            <p> { `Дата окончания: ${graduationDate.toFormat('MM.yyyy')}` } </p>
            <p> { `Срок обучения: ${organization.studyDuration}` }</p>
          </div>
  })

  const changeDiplomClicked =  (num: number) => {
    witchDiplomClicked === 0 ? setwitchDiplomClicked(num) : setwitchDiplomClicked(0)
  }

  const diplomasItems = currentDoctor?.about.gallery.map((photo, i) => {
    return <div key = {photo} className={classes.doplomWrp}>
              <img onClick = {changeDiplomClicked.bind(null, i+1)} className = {clsx(classes.diplom, {
                clicked: witchDiplomClicked === i+1,
              })} src={photo} alt={`diplom ${i+1}`}/>
    </div>
  })

  const reviewsItems = currentDoctor?.reviews.map((review, i) => {
      return <div key = {review.id} className = {classes.reviewItem}>
                <div className = {classes.reviewCol1}>
                  <img className = {classes.rewiewAva} src={review.avatar} alt={`review ${i}`}/>
                  <p>{`Всего отзывов: ${review.countOfreviews}`} <span><img src={likeIcon} alt=""/> {review.countOfLikes}</span></p>
                  <p>{`Оценка: ${review.raiting}`}</p>
                </div>
                <div className = {classes.reviewCol2}>
                  <p>{review.textReview}</p>
                </div>
            </div>
  })

  const getCommonRaiting = () => {
    let array:number[] = [];
    currentDoctor?.reviews.forEach(review=> {
        array.push(review.raiting); 
    })
    let raiting = (array.reduce((sum, cur) => sum + cur)/array.length).toFixed(2);
    return raiting
  }
  if (currentDoctor) return(
    <div className = {classes.mainWrp}>
      <div><Link to='/'>На главную</Link></div>
      <div className = {classes.titleWrp}><h1>{currentDoctor && `${currentDoctor.lastName} ${currentDoctor.firstName} ${currentDoctor.middleName}`}</h1>
      </div>

      <div className = {classes.descriptionWrp}>
        <div className = {classes.imgWrp}> 
            <img src={currentDoctor.photo} alt="avatar"/>
            <div>Общий рейтинг: {getCommonRaiting()} </div>
        </div>
        <div className ={classes.aboutWrp}>
            <div className={classes.col}>
              
                <div className = {classes.row}>
                <div className={classes.col}>
                  {['Специализация:',
                   'Категория:',
                    'Возраст:'].map(item => <p> <b>{item}</b> </p>)}
                </div>
                <div className={classes.col}>
                  <p>{currentDoctor.about.specialization}</p>
                  <p>{`${currentDoctor.about.category}. ${currentDoctor.about.degree ?? ''}`}</p>
                  <p>{currentDoctor.age}</p>                  
                </div>
                </div>

            </div>
            <div className={classes.col}>
                <div className = {classes.row}>
                    <div className={classes.col}>
                    {['Тел:',
                   'E-mail:',
                    'Skype:'].map(item => <p> <b>{item}</b> </p>)}
                    </div>
                    <div className={classes.col}>
                      <p>{currentDoctor.contacts.phone}</p>
                      <p>{currentDoctor.contacts.email}</p>
                      <p>{currentDoctor.contacts.skype}</p>                  
                    </div>
                  </div>
            </div>
        </div>
      </div>

      <div className = {classes.scheduleWrp}>
           <h1>График работы</h1>
           <div className = {classes.organizationWrp}>
           {sheduleItems}     
           </div>                 
      </div>

      <div className = {classes.workExperienceWrp}>
        <h1>Опыт работы</h1>
        <div className = {classes.organizationWrp}>
          {workExperienceItems}
        </div>
      </div>

      <div className= {classes.educationWrp}>
        <h1>Образование</h1>
        <div className = {classes.organizationWrp}>
          {educationItems}
        </div>
      </div>

      <div className= {classes.galleryWrp}>
        <h1>Дипломы</h1>
        <div className = {classes.diplomasWrp}>
            {diplomasItems}
        </div>
      </div>

      <div className= {classes.reviewsWrp}>
        <h1>Отзывы</h1>
        <div className = {classes.reviews}>
          {reviewsItems}
        </div>
      </div>

    </div>
  )
  else return null
}

export default DoctorPage;