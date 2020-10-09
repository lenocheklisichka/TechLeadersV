import React, { useState, useRef } from "react";

export const MyComponent: React.FC = () => {
    let InputEl = useRef("");
    const [value, setValue] = useState("");
    return (
        <div
            style={{
                border: "1px solid silver"
            }}
        >
            <input type="text" ref={InputEl.current} />
            <br/>
            {value}
            <br/>
            <button
                onClick={() => setValue(InputEl.current)}
            >
                OK
            </button>
        </div>
    );
};
