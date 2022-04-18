import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddElementClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  useEffect(() => {
    const closeAllPopupsEsc = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    };

    document.addEventListener('keydown', closeAllPopupsEsc);
    return () => {
      document.removeEventListener('keydown', closeAllPopupsEsc);
    };
  }, []); 

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddElement={handleAddElementClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        text="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          required
          className="popup__text popup__text_type_name"
          minLength="2"
          maxLength="40"
          type="text"
          name="human"
          id="human-card"
        />
        <span id="human-card-error" className="error"></span>
        <input
          required
          className="popup__text popup__text_type_job"
          minLength="2"
          maxLength="200"
          type="text"
          name="job"
          id="job-card"
        />
        <span id="job-card-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="element"
        title="Новое место"
        text="создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
        />
        <span id="title-card-error" className="error"></span>
        <input
          required
          className="popup__text popup__text_type_image"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          id="image-card"
        />
        <span id="image-card-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        text="ок"
      ></PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        text="Создать"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          required
          className="popup__text popup__text_type_avatar"
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          id="title-avatar"
        />
        <span id="title-avatar-error" className="error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}
