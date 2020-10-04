import {createUseStyles} from "react-jss";
import {Theme} from "../../theme";


const styles = (theme: Theme) => ({
    root: {


    }
});


export default createUseStyles<Theme, keyof ReturnType<typeof styles>>(styles, {name: "UI_CheckBox"});