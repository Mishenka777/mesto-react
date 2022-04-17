import React from "react";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <article className="element">
      <img
        className="element__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button
        className="element__delete"
        type="button"
        aria-label="удалить"
      ></button>
      <div className="element__item">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like">
          <button
            className="element__button"
            type="button"
            aria-label="понравилось"
          ></button>
          <span className="element__button-count">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </article>
  );
}
