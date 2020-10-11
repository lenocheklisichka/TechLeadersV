import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import useStyles from "./styles.jss"

export const AuthorizationForm: React.FC = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const importantEl = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (username.length > 0 && password.length > 5) {
      setIsButtonDisabled(false);
    }
    else {
      setIsButtonDisabled(true);
    }
  }, [username, password])

  const changeUsernameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const scrollDown = () => {
    importantEl.current?.scrollIntoView();
  }

  return (
    <div className={classes.root}>
      <p>Введите имя пользователя и пароль (не менее 6 символов)</p>
      <div className={classes.inputWrapper}>
        <span>Username:</span>
        <input
          type="text"
          name="username"
          value={username}
          onChange={changeUsernameHandler}
        />
        <span>Password:</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={changePasswordHandler}
        />
      </div>
      <button disabled={isButtonDisabled} onClick={scrollDown}>
        Ввести данные
      </button>
      <div className={classes.fillerDiv}></div>
      <p ref={importantEl}>Поздравляем, {username}, Вы правильно ввели все поля!</p>
    </div>
  )
}

