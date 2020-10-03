import React from "react";
import logo from "./logo.svg";

import useGlobalStyles from "./styles.jss";
import useStyles from "./App.styles.jss";
import { Button } from "./ui/Button";

const App: React.FC = () => {
  useGlobalStyles();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
  );
}

export default App;
