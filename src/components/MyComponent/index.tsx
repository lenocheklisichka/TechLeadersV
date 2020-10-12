import React, { useState } from "react";

 const MyTest = () => {
  const [value, setValue] = useState(1);
  
  return (
    <div className="my-element" 
     style= {{
        width: "100%",
        lineHeight: "10px",
      }}
    >
      {value}
      <button
        onClick= {() => setValue(value + 1)}
      >
        Click me
      </button>

    </div>
  );
};
export default MyTest;
