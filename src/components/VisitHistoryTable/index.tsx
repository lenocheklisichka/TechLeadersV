import React from 'react';
import { VisitType } from './types';
import useStyles from "./styles.jss";
import clsx from "clsx";



  



const VisitStoryTable = () => {
  
const classes = useStyles();

const visits:Array<VisitType> = [
  {
    id: {
      number: '12345679',
      url: './',
    },
    date: '21-12-1980',
    time: '15-45',
    clinic: {
      name: 'БСПМ',
      url: './'
    },
    doctor: 'Иванов Иван Иванович',
    urlOfVisit: './',
  },
  {
    id: {
      number: '234567890',
      url: './',
    },
    date: '21-12-2020',
    time: '10-45',
    clinic: {
      name: 'БСПМ',
      url: './'
    },
    doctor: 'Комаровский Петр Петрович',
    urlOfVisit: './',
  },
  {
    id: {
      number: '345678912',
      url: './',
    },
    date: '10-07-2020',
    time: '13-15',
    clinic: {
      name: 'ВОДККЦ',
      url: './'
    },
    doctor: 'Петрова Ольга Николаевна',
    urlOfVisit: './',
  }
];

const tableRows = visits.map((visit: VisitType, i:number) => {
  let isEvenRow = i%2 === 0 ? true : false;

      return <tr className = {clsx(classes.tr, {tableStriped: isEvenRow})}>
                <td className = {classes.td}>{visit.date}</td>
                <td className = {classes.td}>{visit.time}</td>
                <td className = {classes.td}><a href={visit.clinic.url}> {visit.clinic.name}</a></td>
                <td className = {classes.td}>{visit.doctor}</td>
                <td className = {classes.td}><a href={visit.id.url}>ID: {visit.id.number}</a></td>
              </tr>
})

  


  return (    
    <div className={classes.container}>
      <div className = 'title'>
        <h1>История посещений</h1>
        </div>
      <table className = {classes.table}>
        <thead className = {classes.thead}>
            <tr>
                <th className = {classes.th}>Дата</th>
                <th className = {classes.th}>Время</th>
                <th className = {classes.th}>Клиника</th>
                <th className = {classes.th}>Врач</th>
                <th className = {classes.th}>Запись визита</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
      </table>
    </div>
  );

}

export default VisitStoryTable;