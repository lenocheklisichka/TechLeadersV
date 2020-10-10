import React from "react";
import ReactDOM from "react-dom";
import { StyleSheet, Rule } from "jss";
import { JssProvider, ThemeProvider } from "react-jss";
import murmurhash from "murmurhash";

import App from "./App";
import { theme } from "./theme";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const createGenerateId = () => (rule: Rule, sheet?: StyleSheet) => {
  const prefix = sheet?.options.classNamePrefix;

  if (prefix) {
    return prefix + rule.key;
  }
  
  return rule.key + murmurhash.v3(rule.toString());
};
const generateId = createGenerateId();


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <JssProvider generateId={generateId}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </JssProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
