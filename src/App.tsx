import React, { useEffect, useCallback } from "react";
import logo from "./logo.svg";

import useGlobalStyles from "./styles.jss";
import useStyles from "./App.styles.jss";
import { Button } from "./ui/Button";
import { AppStoreProvider, useAppStore } from "./store/AppStore";
import { Test } from "./components/Test";
import Tabs from "./ui/Tabs";
import Tab from "./ui/Tabs/Tab";

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
      <Tabs >
        <Tab label='tab-1'>
          <h1>заголовок 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </Tab>
        <Tab label='tab-2'>
          <h1>заголовок 2</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, doloribus.</p>
        </Tab>
        <Tab label='tab-3'>
          <h1>заголовок 3</h1>
          <p>Adipisci esse harum in nam natus, perferendis similique. Ad exercitationem expedita,
            fugit officia porro quidem! Suscipit!</p>
        </Tab>
      </Tabs>
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
