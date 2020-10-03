import React from "react";

import { isBrowser } from "../helpers/isBrowser";
import { TABLET_BREAKPOINT } from "../theme";

type Device = {
  width: number;
  isMobile: boolean;
};

type AppStore = {
  device: Device;
};

const getDevice = (width: number) => {
  return {
    isMobile: width < TABLET_BREAKPOINT,
    width,
  };
};

const defaultState: AppStore = {
  device: getDevice(isBrowser() ? window.innerWidth : 0),
};

const AppStoreContext = React.createContext<[
  AppStore,
  {
    setDeviceWidth: (width: number) => void;
  },
] | null>(null);

export const AppStoreProvider: React.FC<{
  initialState?: Partial<AppStore>;
}> = ({ children, initialState = {} }) => {
  const [state, setState] = React.useState<AppStore>({
    ...defaultState,
    ...initialState,
  });

  const setDeviceWidth = React.useCallback((width: number) => {
    setState((prev) => ({
      ...prev,
      device: getDevice(width),
    }));
  }, []);

  return (
    <AppStoreContext.Provider value={[
      state,
      {
        setDeviceWidth,
      },
    ]}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = () => {
  const store = React.useContext(AppStoreContext);

  if (!store) {
    throw new Error("useAppStore must be used within a AppStoreContextProvider");
  }

  return store;
};
