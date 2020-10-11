import React from 'react';
import logo from "./../../logo.svg";
import useStyles from "../../App.styles.jss";
import { Test } from '../Test';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';
const MainPage: React.FC = () => {
  const classes = useStyles();
  return <header className={classes.header}>
            <img src={logo} className={classes.logo} alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Test />
            <Link to='/visit-history'>История посещений</Link>
            <Link to='/doctor-page'>Страница врача</Link>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                window.open("https://reactjs.org", "_blank");
              }}
            >
              Learn React
            </Button>
          </header>
}

export default MainPage;