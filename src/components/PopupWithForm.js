export default function PopupWithForm(props) {
  return (
    <div>
      <article
        className={`popup popup_${props.name} ${props.isOpen && "popup_opened"
          }`}
      >
        <form
          className={`popup__container popup__container_type_${props.name}`}
          noValidate
          onSubmit={props.onSubmit}
          name={props.name}
        >
          <button
            className="popup__exit"
            type="button"
            aria-label="закрыть"
            onClick={props.onClose}
            onKeyDown={props.onCloseEsc}
          ></button>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__save" type="submit">
            {props.text}
          </button>
        </form>
      </article>
    </div>
  );
}
