import { createUseStyles } from "react-jss";

import { Theme } from "../../theme";

const styles = (theme: Theme) => ({
  root: {
    minHeight: '100vh', 
    padding: '40px 0',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  container: {
    maxWidth: 1440,
    margin: '0 auto'
  },
  listReset: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  title: {
    margin: 0,
    marginBottom: 20,
    textAlign: 'center',
  },
  patientInfo: {
    padding: '10px 0'
  },
  patientItem: {
    marginBottom: 15
  },
  subtitle: {
    margin: '0 0 2px',
    fontSize: 20,
    fontWeight: '500'
  },
  text: {
    margin: 0
  }
});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "Component_Test" });
