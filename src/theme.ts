export interface Theme {
  palette: {
    text: {
      primary: string;
      secondary: string;
    };
    divider: string;
    background: {
      default: string;
      paper: string;
    };
    primary: {
      main: string;
      dark: string;
    };
    secondary: {
      main: string;
      dark: string;
    };
    error: {
      main: string;
    };
  };
  mediaRequests: {
    mobile: string;
    desktop: string;
    tablet: string;
    notMobile: string;
    notDesktop: string;
  };
  fontFamily: string;
}

export const TABLET_BREAKPOINT = 768;
export const DESKTOP_BREAKPOINT = 1024;

export const theme: Theme = {
  mediaRequests: {
    desktop: `@media (min-width: ${DESKTOP_BREAKPOINT}px)`,
    mobile: `@media (max-width: ${(TABLET_BREAKPOINT - 1)}px)`,
    notDesktop: `@media (max-width: ${(DESKTOP_BREAKPOINT - 1)}px)`,
    notMobile: `@media (min-width: ${TABLET_BREAKPOINT}px)`,
    tablet: `@media (min-width: ${TABLET_BREAKPOINT}px) and (max-width: ${(DESKTOP_BREAKPOINT - 1)}px)`,
  },
  palette: {
    text: {
      primary: "rgba(0, 0, 0, .87)",
      secondary: "rgba(0, 0, 0, .54)",
    },
    background: {
      default: "#f9f8f7",
      paper: "#f9f8f7",
    },
    divider: "rgba(0, 0, 0, .12)",
    primary: {
      main: "rgb(240, 55, 58)",
      dark: "rgb(225, 33, 36)",
    },
    secondary: {
      main: "rgb(0, 137, 123)",
      dark: "rgb(0, 172, 148)",
    },
    error: {
      main: "red",
    },
  },
  fontFamily:
      'apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
};
