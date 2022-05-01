import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function AddPlacePopup(props) {


  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }
  useEffect(() => {
    setName(currentUser.name);
    setLink(currentUser.link);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace(name, link);
  }

  return (
    <PopupWithForm
      name="element"
      title="Новое место"
      text="создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__text popup__text_type_title"
        required
        minLength="2"
        maxLength="30"
        type="text"
        name="name"
        placeholder="Название"
        id="title-card"
        onChange={handleNameChange}
      />
      <span id="title-card-error" className="error"></span>
      <input
        required
        className="popup__text popup__text_type_image"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        id="image-card"
        onChange={handleLinkChange}
      />
      <span id="image-card-error" className="error"></span>
    </PopupWithForm>
  )
}