import React, {FC} from "react";
import {TabType} from "./types";

const Tab: FC<TabType> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default Tab