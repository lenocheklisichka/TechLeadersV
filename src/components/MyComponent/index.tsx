import React, {useState} from "react";

export const Component = () => {
  const[value, setValue] = useState("")

  const yogaTour = {
    value: 'Йога-тур – это новый вид туризма, когда с путешествием в другую страну сочетаются занятия по йоге. Вы отдыхаете на море, посещаете интересные места, несколько раз в день занимаетесь йогой и проводите отпуск в интересной компании'
  }

  return (
    <div
      style = {{
        margin: "100px auto",
        color: "blue",
        width: "500px",
      }}
    >
      <h1>ЙОГА-ТУРЫ В ИНДИЮ</h1>

      {value}

      <button
       onClick = {() => setValue(yogaTour.value)}
        style = {{
          padding: "10px",
          marginTop: "20px",
          background: "transparent",
          cursor: "pointer",
       }}
      >
        Что такое йога-тур?
      </button>
    </div>
  );
};


