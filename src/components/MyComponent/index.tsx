import  React,{useState, useEffect, useRef} from "react";

export const FormComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const hiddenBlockRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setUsername(username);
  },[username]);

  useEffect(() => {
    setPassword(password);
  },[password]);

  return (
    <form>
      <h1>Authorization form</h1>
      <div>
        <label
          style = {{
            marginRight: "20px",
            fontSize: "18px",
          }} 
        >
          Enter username:
        </label>
        <input
          name="username" type="text"
          onChange={(event) => {
            setUsername(event.target.value)
          }}
        >
        </input>
      </div>
         
      <div
        style= {{
          marginTop: "20px",
        }}
      >
        <label
          style = {{
            marginRight: "20px",
            fontSize: "18px",
          }} 
        >
          Enter password:
        </label>
        <input 
          name="password" 
          type="password"
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        >
        </input>
      </div>
        <button
          style= {{
            width: "100px",
            padding: "5px",
            background: "transparent",
            marginTop: "20px",
          }}

          disabled={username === "" || password === ""}

          onClick= { (event) => {
            // eslint-disable-next-line no-lone-blocks
            event.preventDefault(); {
              if (hiddenBlockRef.current != null) {
                hiddenBlockRef.current.scrollIntoView({block: "start", behavior: "smooth",})
              }
            } 
          } }
        >
          Sign up
        </button>
            
          <div style={{height: "300px",}}></div>
          <div style={{height: "300px",}}></div>
          <div style={{height: "300px",}}></div>
          <div style={{height: "300px",}}></div>
          <div style={{height: "300px",}}></div>
          <div style={{height: "300px",}}></div>
          <div style={{height: "300px",}}></div>
          <div style={{height: "300px",}}></div>
          <div style={{height: "300px",}}></div>
          <div style={{height: "300px",}}></div>
          <div style={{height: "300px",}}></div>
          <div style={{height: "300px",}}></div>
          
          <div ref={hiddenBlockRef}
              style={{
                height: "700px",
              }}
          >
            <p 
              style={{
                width: "500px",
                margin: "auto",
                padding: "50px",
                background: "lightgreen",
                borderRadius: "50px",
              }}
            >
              "Йога-тур – это новый вид туризма, когда с путешествием в другую страну сочетаются занятия по йоге.
               Вы отдыхаете на море, посещаете интересные места, несколько раз в день занимаетесь йогой и проводите 
               отпуск в интересной компании. Теперь отдых стал интересным и полезным для тела и души."
            </p>
          </div>
    </form>
  );
}

