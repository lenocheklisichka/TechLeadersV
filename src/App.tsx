import React, {useEffect, useCallback, useState} from "react";
import logo from "./logo.svg";

import useGlobalStyles from "./styles.jss";
import useStyles from "./App.styles.jss";
import { Button } from "./ui/Button";
import { AppStoreProvider, useAppStore } from "./store/AppStore";
import { Test } from "./components/Test";
import {CheckBox} from "./ui/CheckBox";

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



  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(true);
  const [check5, setCheck5] = useState(true);
  const [check6, setCheck6] = useState(false);


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
      <CheckBox label={'1111111111'} onChange={() => setCheck1(!check1)} checked={check1} disabled={true}/>
      <CheckBox label={'2222222222'} onChange={() => setCheck2(!check2)} checked={check2} disabled={true} />
      <CheckBox label={'3333333333'} onChange={() => setCheck3(!check3)} checked={check3}  />
      <CheckBox label={'4444444444'} onChange={() => setCheck4(!check4)} checked={check4}  />
      <CheckBox label={'5555555555'} onChange={() => setCheck5(!check5)} checked={check5}  />
      <CheckBox label={'6666666666'} onChange={() => setCheck6(!check6)} checked={check6}  />
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
