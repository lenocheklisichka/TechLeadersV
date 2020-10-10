import React, { useState } from "react";

export const MyComponent: React.FC = () => {
    const [value, setValue] = useState(0);

return (
  <div>
      <p>Вы вошли в систему {value} раз</p>

      <button
        onClick={() => setValue(value + 1)}
      >
         Вход в систему
      </button>
  </div>
 );
};

