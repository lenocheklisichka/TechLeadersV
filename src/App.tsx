import React, { useEffect, useCallback } from "react";


import useGlobalStyles from "./styles.jss";
import useStyles from "./App.styles.jss";
import { AppStoreProvider, useAppStore } from "./store/AppStore";
import VisitStoryTable from "./pages/VisitHistory";
import { Link, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";

const App: React.FC = () => {
  useGlobalStyles();
  const classes = useStyles();
  const [, { setDeviceWidth }] = useAppStore();

  const setDevice = useCallback(() => {
    setDeviceWidth(window.innerWidth);
  }, [setDeviceWidth]);

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
          <Route exact path = '/' component={MainPage} />
          <Route path='/visit-history' component={VisitStoryTable}/>
          <Route path='/clinic-list' render={() => <div>Список клиник</div>}/>
          <Route path='*' render={() => <div>Ошибка 404! Упс, страница не найдена
            <Link to = '/'>Назад</Link>
          </div>}/>
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
