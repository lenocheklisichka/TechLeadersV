import React, { useEffect, useState } from 'react';
import { VisitType } from './types';
import useStyles from "./styles.jss";
import clsx from "clsx";
import { Button } from '../../ui/Button';
import { Link } from 'react-router-dom';
import  orderBy  from 'lodash/orderBy';
import { DateTime } from 'luxon';


function generateId(num:number = 6) {
  let array = [];
  for (let i = 0; i < num ; i++) {
    array.push(Math.floor(Math.random() * Math.floor(10)));
  }
  let id = +array.join('');
  return id;      
} 

const visitsFromServer:VisitType[] = [
  {
    id: generateId(6),
    dateAndTime: new Date(2015, 1, 20, 6, 8).toISOString(),
    clinic: {
      id: generateId(4),
      name: 'ВОКБ № 1',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Иван',
      middleName: 'Петрович',
      lastName: 'Комаров',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date().toISOString(),
    clinic: {
      id: generateId(4),
      name: 'БСМП',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Петр',
      middleName: 'Иванович',
      lastName: 'Сидоров',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date(2020, 1, 20, 1, 8).toISOString(),
    clinic: {
      id: generateId(4),
      name: 'Детская областная',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Иван',
      middleName: 'Иванович',
      lastName: 'Комаровский',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date(2019, 1, 20, 6, 4).toISOString(),
    clinic: {
      id: generateId(4),
      name: 'БСМП',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Петр',
      middleName: 'Иванович',
      lastName: 'Васильков',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date(2017, 1, 20, 15, 18).toISOString(),
    clinic: {
      id: generateId(4),
      name: 'ВОКБ № 1',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Дмитрий',
      middleName: 'A',
      lastName: 'Сенькевич',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date(2020, 9, 20, 5, 8).toISOString(),
    clinic: {
      id: generateId(4),
      name: 'Поликлиника № 5',
    },
    doctor: {
      id: generateId(4),
      firstName: 'A',
      middleName: 'A',
      lastName: 'A',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date(2020, 10, 1, 16, 8).toISOString(),
    clinic: {
      id: generateId(4),
      name: 'Инфекционная',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Виктор',
      middleName: 'Викторович',
      lastName: 'Мазай',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date().toISOString(),
    clinic: {
      id: generateId(4),
      name: 'Поликлиника № 1',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Иван',
      middleName: 'Иванович',
      lastName: 'Коромыслов',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date(2020, 6, 1, 16, 8).toISOString(),
    clinic: {
      id: generateId(4),
      name: 'Поликлиника № 3',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Зураб',
      middleName: 'A',
      lastName: 'Забойнов',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date(2018, 5, 1, 1, 29).toISOString(),
    clinic: {
      id: generateId(4),
      name: 'Поликлиника № 3',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Ольга',
      middleName: 'Сергеевна',
      lastName: 'Виктюк',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date(2010, 5, 1, 1, 29).toISOString(),
    clinic: {
      id: generateId(4),
      name: 'ВОКБ',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Елена',
      middleName: 'Ивановна',
      lastName: 'Сидорова',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date(2019, 4, 1, 8, 29).toISOString(),
    clinic: {
      id: generateId(4),
      name: 'ВОКБ № 1',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Андрей',
      middleName: 'Иванович',
      lastName: 'Юдин',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date().toISOString(),
    clinic: {
      id: generateId(4),
      name: 'Поликлиника № 3',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Ирина',
      middleName: 'Андреевна',
      lastName: 'Яхонтова',
    }, 
  },
  {
    id: generateId(6),
    dateAndTime: new Date().toISOString(),
    clinic: {
      id: generateId(4),
      name: 'БСМП',
    },
    doctor: {
      id: generateId(4),
      firstName: 'Петр',
      middleName: 'Иванович',
      lastName: 'Сидоров',
    }, 
  },


];
const VisitStoryTable = () => {


const classes = useStyles();
const [visits, setVisits] = useState<VisitType[]>(visitsFromServer);
const [sortedVisits, setSortedVisits] = useState<VisitType[] | null>([]);
const [paginatedVisits, setPaginateVisits] = useState<VisitType[][]>([]);
const [dirOfSort, toggleDirOfSort] = useState<'asc' | 'desc'>('desc');
const [selectedColumn, setSelectedColumn] = useState('');
const [itemPerPageCount, setItemPerPageCount] = useState(10);

useEffect(() => {
  setVisits(visitsFromServer);
  sortBySomeColumn('dateAndTime');
}, []);

useEffect(() => {
  createPaginationArray();
  }, [sortedVisits, itemPerPageCount]);


const createPaginationArray = () => {
  let paginatedData: (VisitType[] | undefined)[]  = [];
  const numOfPages = sortedVisits ? Math.ceil(sortedVisits.length / itemPerPageCount) : 1;

  for (let i = 0; i < numOfPages; i++) {
    let startRow = (i) * itemPerPageCount;
    let finishRow = startRow + itemPerPageCount;
    let newPageData = sortedVisits?.slice(startRow, finishRow);
    paginatedData ? paginatedData = [...paginatedData, newPageData] : paginatedData = [];
    setPaginateVisits(paginatedData as VisitType[][]);
  }
}

const sortBySomeColumn = (columnName:string) => {
  let sortData = orderBy(visits, [columnName], [dirOfSort])
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
  let isEvenRow = i%2 === 0;
  let visitTime =  DateTime.fromISO(visit.dateAndTime);
      return <tr key = {i} className = {clsx(classes.tr, {tableStriped: isEvenRow})}>
                <td className = {classes.td}>{visitTime.toFormat('yyyy / MM / dd')}</td>
                <td className = {classes.td}>{visitTime.toFormat('hh : mm')}</td>
                <td className = {classes.td}>
                  <Link to={`/clinic-list/${visit.clinic?.id}`}>{visit.clinic.name}</Link>
                </td>
                <td className = {classes.td}>{`${visit.doctor.lastName} ${visit.doctor.firstName} ${visit.doctor.middleName}`}</td>
                <td className = {classes.td}>
                  <Link to={`/visit-history/${visit.id}`}>ID: {visit.id}</Link>
                </td>
              </tr>
})

const IsFewPages = paginatedVisits && paginatedVisits.length > 1;

const sortArrow = dirOfSort === 'asc' 
                  ? <span>&#9660;</span> 
                  : <span>&#9650;</span>;
  return (    
    <div className={classes.container}>
      <div className = {classes.toMainMenuLink}>
        <Link to='/'>На главную</Link>
      </div>
      <div className = {classes.title}>
        <h1>История посещений</h1>
      </div>
      <table className = {classes.table}>
        <thead className = {classes.thead}>
            <tr>
                <th 
                onClick={sortBySomeColumn.bind(null, 'dateAndTime')} 
                className = {classes.th}
                >Дата {selectedColumn === 'dateAndTime' && sortArrow}
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
                onClick={sortBySomeColumn.bind(null, 'doctor.lastName')}
                className = {classes.th}
                >Врач {selectedColumn === 'doctor.lastName' && sortArrow}
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