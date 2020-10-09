import React, { useEffect, useCallback } from "react";
// import logo from "./logo.svg";

import useGlobalStyles from "./styles.jss";
// import useStyles from "./App.styles.jss";
// import { Button } from "./ui/Button";
import { AppStoreProvider, useAppStore } from "./store/AppStore";
// import { Test } from "./components/Test";
import { MyComponent } from "./components/MyComponent";

const App: React.FC = () => {
  useGlobalStyles();
  // const classes = useStyles();
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
    <div>
      <MyComponent />
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
