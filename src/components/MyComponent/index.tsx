import React, { useState, useRef } from "react";

export const MyComponent: React.FC = () => {
    const InputRef = useRef<HTMLInputElement | null>(null);
    const [value, setValue] = useState("");
    return (
        <div>
            <input type="text" ref={InputRef} />
            <br/>
            {value}
            <br/>
            <button
            
                onClick={() => {if (InputRef.current?.value != null) {setValue(InputRef.current?.value)}}}
            >
                OK
            </button>
        </div>
    );
};
