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

  titleWrp:{

  },
  descriptionWrp:{

  },
  scheduleWrp:{

  },
  workExperienceWrp:{

  },
  educationWrp:{

  },
  galleryWrp:{

  },
  reviewsWrp:{

  },

})


export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "Doctor-page" });