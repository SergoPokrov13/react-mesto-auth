import { Link } from "react-router-dom";
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import InfoTooltipTrue from '../../images/InfoTooltipTrue.svg'

function Register (){
    let isRegister = false;
    return(
        <div className="login">
            <h2 className="login__title">Регистрация</h2>
            <form action="" className="login__form">
                <input type="text" placeholder="Email" className="login__input"/>
                <input type="text" placeholder="Пароль" className="login__input"/>
                <button className="login__btn">Зарегистрироваться</button>
            </form>
            <div className="login__block">
                <p className="login__text">Уже зарегистрированы?</p>
                <Link to="/sign-in" className="login__text">Войти</Link>
            </div>
            <InfoTooltip isOpen={isRegister} link={InfoTooltipTrue} name="Вы успешно зарегистрировались!"/>
        </div>
    )
}

export default Register;