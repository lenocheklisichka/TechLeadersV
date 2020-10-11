import {createUseStyles} from "react-jss";
import {Theme} from "../../theme";

const styles = (theme: Theme) => ({
    root: {
    },

    check: {
        paddingLeft: '1.2em'
    },

    check_box: {
        position: "absolute",
        marginLeft: '-1em',
        marginTop: '0.45em',
        width: '0.6em',
        height: '0.6em',
        boxShadow: "0 0 0 0.08em #4A90E2",
        backgroundColor: "#FFFFFF",
        borderRadius: '0.05em'
    },

    check_input: {
        position: "absolute",
        appearance: "none",

        "&:checked + $check_box": {
            backgroundColor: "#4A90E2",
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%0AviewBox='0 0 174.239 174.239' xml:space='preserve'%3E%3Cpath d='M74.439,157.519c-1.59,1.848-4.34,1.989-6.111,0.313L1.38,94.468c-1.771-1.676-1.848-4.496-0.173-6.267l21.33-22.539%0Ac1.676-1.771,4.496-1.848,6.267-0.173l36.571,34.611c1.771,1.676,4.521,1.535,6.111-0.313l71.447-83.015%0Ac1.59-1.848,4.404-2.059,6.251-0.468l23.518,20.242c1.848,1.59,2.059,4.404,0.468,6.252L74.439,157.519z' fill='white' /%3E%3C/svg%3E\");",
        },

        "&:focus + $check_box": {
            boxShadow: "0 0 0 0.08em #4A90E2, 0 0 0 0.15em #7ED321",
        },

        "&:disabled + $check_box": {
            boxShadow: "0 0 0 0.08em #9B9B9B",
        },

        "&:checked:disabled + $check_box": {
            backgroundColor: "#9B9B9B",
        },

    },
});


export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, {name: "UI_CheckBox"});