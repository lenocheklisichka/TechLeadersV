import { createUseStyles } from "react-jss";

import { Theme } from "../../theme";

const styles = (theme: Theme) => ({
  mainWrp: {
    width: "100%",
    padding: '20px',
    backgroundColor: '#ffffff',
    color: '#212529',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  commonWrp:{
    width: '100%',
    maxWidth: '1200px',    
    backgroundColor: '#e9e9e9',
    paddingBottom: '40px',
  },

  titleWrp:{
    extend: 'commonWrp',
  },

  descriptionWrp: {
    extend: 'commonWrp',
    display: 'flex',
    flexDirection: 'row',    
    justifyContent: 'space-between',
    alignItems: 'center',
    
    "& $imgWrp": {
      marginLeft: '20px',
      
      flex: 1,
      
      "& img": {
        borderRadius: '20px',
        maxHeight: "100%",
      }
    },

    "& $aboutWrp": {
      flex: 5,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      [theme.mediaRequests.mobile]: {
        flexDirection: 'column',
      } as any,

      "& $row": {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flexStart',
        alignItems: 'center',
      },
      "& $col" : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: "10px",        
      }

    },
  },
  col: {},
  row: {},
  imgWrp: {},
  aboutWrp: {},


  scheduleWrp:{
    extend: 'commonWrp',

    
  },

  organizationWrp: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },

  workExperienceWrp:{
    extend: 'commonWrp',
  },
  educationWrp:{
    extend: 'commonWrp',
  },
  galleryWrp:{
    extend: 'commonWrp',
  },

  diplomasWrp: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  diplom: {},

  doplomWrp:{
    width: '30%',
    minWidth: '150px',    
    "& $diplom": {
      borderRadius: '20px',
      maxHeight: "100%",
      maxWidth: "100%",
      cursor: 'pointer',
        "&.$clicked": {
          position: 'fixed',
          top: 0,
          left:0,
          width: '100vw',
        },
    },
  },


  reviewsWrp:{
    extend: 'commonWrp',
  },

  reviews:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: "10px",        
  },

  reviewItem:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    border: "1px solid #000000",
    borderRadius: "20px",
    marginTop: '20px',
    
  },

  reviewCol1: {
    flex: 1,
    '& span>img': {
      width: '20px',
      
    }
  },

  rewiewAva:{    
    marginTop: '10px',
    borderRadius: '50%',
    minWidth: '70px',
    height: 'auto%',
  },

  reviewCol2: {
    flex: 4,
    textAlign: 'justify',
  },






})


export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "Doctor-page" });