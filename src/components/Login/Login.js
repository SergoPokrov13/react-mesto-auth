import InfoTooltip from '../InfoTooltip/InfoTooltip';
import InfoTooltipFalse from '../../images/InfoTooltipFalse.svg'

function Login (){
    let isLogin = false;
    return(
        <div className="login">
            <h2 className="login__title">Вход</h2>
            <form action="" className="login__form">
                <input type="text" placeholder="Email" className="login__input"/>
                <input type="text" placeholder="Пароль" className="login__input"/>
                <button className="login__btn">Войти</button>
            </form>
            <InfoTooltip isOpen={isLogin} link={InfoTooltipFalse} name="Что-то пошло не так! Попробуйте ещё раз."/>
        </div>
    )
}

export default Login;