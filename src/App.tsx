import React, { useEffect, useCallback } from "react";
import logo from "./logo.svg";

import useGlobalStyles from "./styles.jss";
import useStyles from "./App.styles.jss";
import { Button } from "./ui/Button";
import { AppStoreProvider, useAppStore } from "./store/AppStore";
import { Test } from "./components/Test";
import VisitStoryTable from "./components/VisitHistoryTable";
import { Link, Redirect, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  useGlobalStyles();
  const classes = useStyles();
  const [, { setDeviceWidth }] = useAppStore();

  const setDevice = useCallback(() => {
    setDeviceWidth(window.innerWidth);
  }, [setDeviceWidth])
 
 


  useEffect(() => {
    setDevice();
    window.addEventListener("resize", setDevice);

    return () => {
      window.removeEventListener("resize", setDevice);
    };
  }, [setDevice]);

  return (
    <div className={classes.root}>
      <Switch>
      < Route exact path = '/'
          render = {
            () => < Redirect to = {
              '/main-page'
            }
            />
          }
          />
           < Route path = '/main-page'
          render = {
            () => <header className={classes.header}>
            <img src={logo} className={classes.logo} alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Test />
            <Link to='/visit-history'>История посещений</Link>
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
          />
          <Route path='/visit-history' render={() => <VisitStoryTable />}/>
          <Route path='/clinic-list' render={() => <div>Список клиник</div>}/>
          <Route path='*' render={() => <div>404 Страница не найдена</div>}/>
          </Switch>
      
    </div>
  );
}

export default () => {
  return (
    <AppStoreProvider>
      <App />
    </AppStoreProvider>
  )
};
