import React, {FC, useState} from "react";
import useStyles from "./styles.jss";
import {TabsType} from "./types";

const Tabs: FC<TabsType> = ({children}) => {

    const classes = useStyles()

    const [activeTab, setActiveTab] = useState(children[0].props.label)

    const handleClick = (newActiveTab: boolean) => {
        setActiveTab(newActiveTab)
    }

    return (
        <div>
            <nav>
                <ul className={classes.tab}>
                    {children.map((tab: JSX.Element) => {
                        return (
                            <li
                                key={tab.props.label}
                                className={tab.props.label === activeTab ? classes.activeTab : ''}
                            >
                                <button
                                    className={classes.tabButton}
                                    onClick={e => handleClick(tab.props.label)}
                                >{tab.props.label}</button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            {children.map((tab: JSX.Element) => {
                if (tab.props.label === activeTab) {
                    return (
                        <div key={tab.props.label}>{tab.props.children}</div>
                    );
                } return null
            })}
        </div>
    );
}

export default Tabs