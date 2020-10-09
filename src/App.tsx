import React, { useEffect, useCallback } from "react";
import logo from "./logo.svg";

import useGlobalStyles from "./styles.jss";
import useStyles from "./App.styles.jss";
import { Button } from "./ui/Button";
import { AppStoreProvider, useAppStore } from "./store/AppStore";
import { Test } from "./components/Test";
import { Radio } from "./ui/Radio";

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
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "white", fontSize: "1rem" }}>
          <Radio name="gender" value="male" label="Муж" onChange={() => {console.log("Муж")}} />
          <Radio name="gender" value="female" label="Жен" onChange={() => {console.log("Жен")}} />
          <Radio name="gender" value="other" label="Др." isDisabled={true} onChange={() => {console.log("Др.")}} />
        </div>
      </header>
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
