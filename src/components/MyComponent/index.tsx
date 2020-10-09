import React, { useState } from "react";

export const MyComponent: React.FC = () => {
    const [value, setValue] = useState("");
    return (
        <div
            style={{
                border: "1px solid silver"
            }}
        >
            <input type="text" />
            <br/>
            {value}
            <br/>
            <button
                onClick={() => setValue(document.getElementsByTagName("input")[0].value)}
            >
                OK
            </button>
        </div>
    );
};
