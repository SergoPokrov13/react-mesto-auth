import InfoTooltip from "../InfoTooltip/InfoTooltip";
import InfoTooltipTrue from "../../images/InfoTooltipTrue.svg";
import InfoTooltipFalse from "../../images/InfoTooltipFalse.svg";
import { useState, useEffect } from "react";
import apiAuth from "../../utils/ApiAuth";
import { Route, Redirect } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Register() {
  const [isRegister, setIsRegister] = useState(false);
  const [isError, setIsError] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleChangEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    apiAuth
      .signup({ email, password })
      .then((data) => {
        setIsRegister(true);
      })
      .catch((err) => setIsError(true));
  };

  const handleClose = () => {
    setIsRegister(false);
    history.push("/sign-in");
  };

  const handleCloseError = () => {
    setIsError(false);
  };

  return (
    <div className="login">
      <h2 className="login__title">Регистрация</h2>
      <form action="" className="login__form" onSubmit={handlesubmit}>
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
        <button className="login__btn">Зарегистрироваться</button>
      </form>
      <div className="login__block">
        <p className="login__text">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="login__text">
          Войти
        </Link>
      </div>
      <InfoTooltip
        onClose={handleCloseError}
        isOpen={isError}
        link={InfoTooltipFalse}
        name="Что-то пошло не так! Попробуйте ещё раз."
      />
      <InfoTooltip
        onClose={handleClose}
        isOpen={isRegister}
        link={InfoTooltipTrue}
        name="Вы успешно зарегистрировались!"
      />
    </div>
  );
}

export default withRouter(Register);
