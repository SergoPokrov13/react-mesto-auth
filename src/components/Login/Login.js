import InfoTooltip from "../InfoTooltip/InfoTooltip";
import InfoTooltipFalse from "../../images/InfoTooltipFalse.svg";
import { useState } from "react";
import apiAuth from "../../utils/ApiAuth";

function Login({ tokenCheck }) {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  const handlesubmitLogin = (e) => {
    e.preventDefault();
    apiAuth
      .signin({ email, password })
      .then((data) => {
        localStorage.setItem("token", JSON.stringify(data));
        JSON.parse(localStorage.getItem("token"));
        tokenCheck();
      })
      .catch((err) => setIsError(true));
  };

  const handleClose = () => {
    setIsError(false);
  };

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form action="" className="login__form" onSubmit={handlesubmitLogin}>
        <input
          type="text"
          placeholder="Email"
          className="login__input"
          onChange={handleChangEmail}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="login__input"
          onChange={handleChangePassword}
        />
        <button className="login__btn">Войти</button>
      </form>
      <InfoTooltip
        onClose={handleClose}
        isOpen={isError}
        link={InfoTooltipFalse}
        name="Что-то пошло не так! Попробуйте ещё раз."
      />
    </div>
  );
}

export default Login;
