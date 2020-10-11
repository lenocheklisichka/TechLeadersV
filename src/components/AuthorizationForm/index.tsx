import React, { useState, useEffect } from "react";
import useStyles from "./styles.jss"

export const AuthorizationForm: React.FC = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    if (username.length > 0 && password.length > 5) {
      setIsButtonActive(true);
    }
    else {
      setIsButtonActive(false);
    }
  }, [username, password])

  return (
    <div className={classes.root}>
      <div className={classes.inputWrapper}>
        <span>Username:</span>
        <input
          type="text"
          name="username"
          value={username}
        />
        <span>Password:</span>
        <input
          type="text"
          name="password"
          value={password}
        />
      </div>
      <button disabled={isButtonActive}>
        Ввести данные
      </button>
    </div>
  )
}