import React, { useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from "./logo.svg";

import useGlobalStyles from "./styles.jss";
import useStyles from "./App.styles.jss";
import { Button } from "./ui/Button";
import { AppStoreProvider, useAppStore } from "./store/AppStore";
import { Test } from "./components/Test";
import PatientCard from "./components/PatientCard";

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
    <Router>
      <Switch>
        <Route exact path="/">
          <div className={classes.root}>
            <header className={classes.header}>
              <img src={logo} className={classes.logo} alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <Test />
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
          </div>
        </Route>
        <Route path="/patient-card/:id">
          <PatientCard />
        </Route>
      </Switch>
    </Router>
  );
}

export default () => {
  return (
    <AppStoreProvider>
      <App />
    </AppStoreProvider>
  )
};
