import React, { useEffect, useState } from 'react';
import { VisitType } from './types';
import useStyles from "./styles.jss";
import clsx from "clsx";
import _ from 'lodash';
import { Button } from '../../ui/Button';



const VisitStoryTable = () => {

  const visits:Array<VisitType> = [
    {
      id: {
        number: '12345679',
        url: './',
      },
      dateAndTime: formatDate(new Date(2015, 1, 20, 6, 8)),
      clinic: {
        name: 'БСПМ',
        url: './'
      },
      doctor: 'Иванов Иван Иванович',
    },
    {
      id: {
        number: '234567890',
        url: './',
      },
      dateAndTime: formatDate(new Date()),
      clinic: {
        name: 'БСПМ',
        url: './'
      },
      doctor: 'Комаровский Петр Петрович',
    },
    {
      id: {
        number: '345678912',
        url: './',
      },
      dateAndTime: formatDate(new Date(2020, 9, 6, 12, 10)),
      clinic: {
        name: 'ВОДККЦ',
        url: './'
      },
      doctor: 'Петрова Ольга Николаевна',
    },
    {
      id: {
        number: '345678912',
        url: './',
      },
      dateAndTime: formatDate(new Date(2000, 9, 6, 12, 9)),
      clinic: {
        name: 'ВОДККЦ',
        url: './'
      },
      doctor: 'Володина Ольга Николаевна',
    },
    {
      id: {
        number: '345678912',
        url: './',
      },
      dateAndTime: formatDate(new Date(2020, 0, 6, 12, 9)),
      clinic: {
        name: 'ВОДККЦ',
        url: './'
      },
      doctor: 'Викторова Ольга Николаевна',
    },
    {
      id: {
        number: '345678912',
        url: './',
      },
      dateAndTime: formatDate(new Date(2020, 1, 6, 12, 9)),
      clinic: {
        name: 'ВОДККЦ',
        url: './'
      },
      doctor: 'Фикс Ольга Николаевна',
    },
    {
      id: {
        number: '345678912',
        url: './',
      },
      dateAndTime: formatDate(new Date(2013, 9, 6, 12, 9)),
      clinic: {
        name: 'ВОДККЦ',
        url: './'
      },
      doctor: 'Суматина Ольга Николаевна',
    },
    {
      id: {
        number: '345678912',
        url: './',
      },
      dateAndTime: formatDate(new Date(2017, 9, 6, 12, 9)),
      clinic: {
        name: 'ВОДККЦ',
        url: './'
      },
      doctor: 'Наполеон Ольга Николаевна',
    },
    {
      id: {
        number: '345678912',
        url: './',
      },
      dateAndTime: formatDate(new Date(2016, 9, 6, 12, 9)),
      clinic: {
        name: 'ВОДККЦ',
        url: './'
      },
      doctor: 'Ватутина Ольга Николаевна',
    },
    {
      id: {
        number: '345678912',
        url: './',
      },
      dateAndTime: formatDate(new Date(2020, 9, 6, 12, 9)),
      clinic: {
        name: 'ВОДККЦ',
        url: './'
      },
      doctor: 'Навальная Ольга Николаевна',
    },
    {
      id: {
        number: '345678912',
        url: './',
      },
      dateAndTime: formatDate(new Date(2020, 9, 6, 12, 9)),
      clinic: {
        name: 'ВОДККЦ',
        url: './'
      },
      doctor: 'Сидорова Ольга Николаевна',
    },
    {
      id: {
        number: '345678912',
        url: './',
      },
      dateAndTime: formatDate(new Date(2020, 9, 5, 9, 9)),
      clinic: {
        name: '№ 9',
        url: './'
      },
      doctor: 'Галкина Ольга Николаевна',
    },
    {
      id: {
        number: '345678912',
        url: './',
      },
      dateAndTime: formatDate(new Date(2018, 9, 6, 10, 9)),
      clinic: {
        name: 'ВОДККЦ',
        url: './'
      },
      doctor: 'Путина Ольга Николаевна',
    },
    {
      id: {
        number: '345678912',
        url: './',
      },
      dateAndTime: formatDate(new Date(2019, 9, 6, 12, 9)),
      clinic: {
        name: 'ВОДККЦ',
        url: './'
      },
      doctor: 'Зверева Ольга Николаевна',
    },
  ];


const classes = useStyles();
const [sortedVisits, setSortedVisits] = useState<Array<VisitType> | null>([]);
const [paginatedVisits, setPaginateVisits] = useState<Array<Array<VisitType>>>([]);
const [dirOfSort, toggleDirOfSort] = useState<'asc' | 'desc'>('desc');
const [selectedColumn, setSelectedColumn] = useState('');
const [itemPerPageCount, setItemPerPageCount] = useState(10);

useEffect(() => {
  sortBySomeColumn('dateAndTime.originalDate');
}, []);

useEffect(() => {
  createPaginationArray();
  }, [sortedVisits, itemPerPageCount]);

function formatDate (date:Date) {
  let dd:number|string = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm:number|string = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy:number|string = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  let hh:number|string = date.getHours();
  if (hh < 10) hh = '0' + hh;

  let min:number|string = date.getMinutes();
  if (min < 10) min = '0' + min;

  return {
    formatedDate: `${dd}.${mm}.${yy}`,
    formatedTime: `${hh} : ${min}`,
    originalDate: date
  }
}

const createPaginationArray = () => {
  let paginatedData: Array<Array<VisitType> | undefined> = [];
  const numOfPages = sortedVisits ? Math.ceil(sortedVisits.length / itemPerPageCount) : 1;

  for (let i = 0; i < numOfPages; i++) {
    let startRow = (i) * itemPerPageCount;
    let finishRow = startRow + itemPerPageCount;
    let newPageData = sortedVisits?.slice(startRow, finishRow);
    paginatedData ? paginatedData = [...paginatedData, newPageData] : paginatedData = [];
    setPaginateVisits(paginatedData as Array<Array<VisitType>>);
  }
}

const sortBySomeColumn = (columnName:string) => {
  let sortData = _.orderBy(visits, [columnName], [dirOfSort])
  setSortedVisits(prev => prev = sortData)
  dirOfSort === 'asc' ? toggleDirOfSort('desc') : toggleDirOfSort('asc');
  setSelectedColumn(columnName);
}

const showMoreRows = () => {
  if (sortedVisits && itemPerPageCount < sortedVisits.length) {
    setItemPerPageCount(prev => prev +=10)
  }
}

const tableRows = paginatedVisits[0]?.map((visit: VisitType, i:number) => {
  let isEvenRow = i%2 === 0 ? true : false;

      return <tr key = {i} className = {clsx(classes.tr, {tableStriped: isEvenRow})}>
                <td className = {classes.td}>{visit.dateAndTime.formatedDate}</td>
                <td className = {classes.td}>{visit.dateAndTime.formatedTime}</td>
                <td className = {classes.td}><a href={visit.clinic.url}> {visit.clinic.name}</a></td>
                <td className = {classes.td}>{visit.doctor}</td>
                <td className = {classes.td}><a href={visit.id.url}>ID: {visit.id.number}</a></td>
              </tr>
})

const IsFewPages = paginatedVisits && paginatedVisits.length > 1 ? true : false;

const sortArrow = dirOfSort === 'asc' 
                  ? <span>&#9660;</span> 
                  : <span>&#9650;</span>;
  return (    
    <div className={classes.container}>
      <div className = {classes.title}>
        <h1>История посещений</h1>
      </div>
      <table className = {classes.table}>
        <thead className = {classes.thead}>
            <tr>
                <th 
                onClick={sortBySomeColumn.bind(null, 'dateAndTime.originalDate')} 
                className = {classes.th}
                >Дата {selectedColumn === 'dateAndTime.originalDate' && sortArrow}
                </th>
                <th  
                className = {classes.th}>Время
                </th>
                <th 
                onClick={sortBySomeColumn.bind(null, 'clinic.name')}
                className = {classes.th}
                >Клиника {selectedColumn === 'clinic.name' && sortArrow}
                </th>
                <th 
                onClick={sortBySomeColumn.bind(null, 'doctor')}
                className = {classes.th}
                >Врач {selectedColumn === 'doctor' && sortArrow}
                </th>
                <th className = {classes.th}>Запись визита
                </th>
            </tr>
          </thead>
          <tbody>
            {tableRows}            
          </tbody>
      </table>
      {IsFewPages && 
      <Button
          variant="contained"
          color="secondary"
          onClick={showMoreRows}
        >
          Еще записи
      </Button>}
    </div>
  );
}

export default VisitStoryTable;