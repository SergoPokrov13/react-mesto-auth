
function InfoTooltip ({link, name, isOpen}){
    return(
      <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__content">
          <div className="popup__block">
          <button
            type="button"
            className="popup__close popup__close"
            // onClick={onClose}
          ></button>
          <img className="popup__image" src={link} alt="" />
          <h2 className="popup__name">{name}</h2>
          </div>
        </div>
      </div>
    )
}

export default InfoTooltip;