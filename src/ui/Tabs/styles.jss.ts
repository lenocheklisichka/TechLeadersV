import { createUseStyles } from "react-jss";
import { Theme } from "../../theme";

const styles = (theme: Theme) => ({
    tab: {
        display: 'flex',
        flexWrap: 'nowrap',
        listStyle: 'none',
    },

    tabContent: {
        backgroundColor: '#d9d9d9',
    },

    tabButton: {
        padding: 10,
        border: 'none',
        backgroundColor: 'transparent',

        '&:hover': {
            backgroundColor: '#e7e7e7',
        },

        '&:focus': {
            backgroundColor: '#e7e7e7',
            outline: 'none',
        }
    },

    activeTab: {
        backgroundColor: '#f3f3f3',
    },


});

export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, { name: "UI_Tabs" });
