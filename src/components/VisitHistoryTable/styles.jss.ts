import { createUseStyles } from "react-jss";

import { Theme } from "../../theme";

const styles = (theme: Theme) => ({
  container: {
    width: "100%",
    padding: '20px',
    backgroundColor: '#ffffff',
    color: '#212529',
  },

  toMainMenuLink: {
    position: 'fixed',
    top: '10px',
    right: '15px',
  },

  title: {
    fontSize: '1.5rem',
  },

  table: {
    display: 'table',
    margin: 0,
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: 'left',
    backgroundColor: '#fff',
    border: '1px solid #dee2e6',
    borderSpacing: '2px',
    width: '100%',
    marginBottom: '1rem',
    borderCollapse: 'collapse',
    boxSizing: 'border-box',
  },

  thead: {
    display: 'table-header-group',
    verticalAlign: 'middle',
    borderColor: 'inherit',
  },

  th: {
    border: '1px solid #dee2e6',
    borderBottom: '2px solid #dee2e6',
    display: 'table-cell',    
    padding: '.75rem',
   },
   
  tr: {
    display: 'table-row',
    verticalAlign: 'inherit',
    borderColor: 'inherit',
    '&.tableStriped': {
      backgroundColor: 'rgba(0,0,0,.05)',
    }
  },

  td: {
    display: 'table-cell',
    border: '1px solid #dee2e6',
    padding: '.75rem',
    verticalAlign: 'top',
  },


  
});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "VisitHistory-Table" });
