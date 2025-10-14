// Seleciona o botão de edição e o popup de perfil
const editButton = document.querySelector("#edit-button"); // Botão para abrir popup de edição
const editPopup = document.querySelector("#profile"); // Popup de edição de perfil

// Função de abrir o popup de edição de perfil
function showPopup() {
  editPopup.classList.add("popup__opened");
}

// Evento de clique no botão de edição de perfil
editButton.addEventListener("click", showPopup);

// Seleciona o botão de adicionar lugar e o popup de novo lugar
const addButton = document.querySelector("#add-button");
const addPopup = document.querySelector("#add-popup");

// Função de abrir o popup de novo Card
function showAddPopup() {
  addPopup.classList.add("popup__opened");
}

// Evento de clique no botão de adicionar novo lugar
addButton.addEventListener("click", showAddPopup);

// Seleciona os botões de fechar dos popups
const closeEditButton = editPopup.querySelector(".popup__button_type_close");
const closeAddButton = addPopup.querySelector(".popup__button_type_close");

// Funções de fechar popups
function closeEditPopup() {
  editPopup.classList.remove("popup__opened");
}
function closeAddPopup() {
  addPopup.classList.remove("popup__opened");
}

// Eventos de clique nos botões de fechar
closeEditButton.addEventListener("click", closeEditPopup);
closeAddButton.addEventListener("click", closeAddPopup);

// -------------------------
// Cards iniciais
// -------------------------
const initialCards = [
  {
    name: "Fernando de Noronha",
    link: "https://images.pexels.com/photos/11159713/pexels-photo-11159713.jpeg",
  },
  {
    name: "Gramado",
    link: "https://images.pexels.com/photos/18171957/pexels-photo-18171957.jpeg",
  },
  {
    name: "Manaus",
    link: "https://images.pexels.com/photos/29759408/pexels-photo-29759408.jpeg",
  },
  {
    name: "Rio de Janeiro",
    link: "https://images.pexels.com/photos/1458036/pexels-photo-1458036.jpeg",
  },
  {
    name: "Salvador",
    link: "https://images.pexels.com/photos/31792594/pexels-photo-31792594.jpeg",
  },
  {
    name: "São Paulo",
    link: "https://images.pexels.com/photos/72479/pexels-photo-72479.jpeg",
  },
];

// Seleciona o template e o container de cards
const template = document.querySelector(".elements__template");
const cardArea = document.querySelector(".elements__cards");

// Função para criar novo card
function createCard(name, link) {
    const cardElement = template.content.querySelector(".elements__card").cloneNode(true);

  const cardImage = cardElement.querySelector(".elements__image");
  const cardText = cardElement.querySelector(".elements__text");
  const cardTrashButton = cardElement.querySelector(".elements__button_type_trash");
  const cardLikeButton = cardElement.querySelector(".elements__button_type_like");
  const cardWindow = cardElement.querySelector(".elements__window");
  const buttonCardImage = cardElement.querySelector(".elements__image-button");
  const cardWindowImage = cardElement.querySelector(".elements__window-image");
  const cardWindowName = cardElement.querySelector(".elements__window-name");
  const windowCloseButton = cardElement.querySelector("#window-close-button");

  // Define conteúdo do card
  cardImage.src = link;
  cardImage.alt = name;
  cardText.textContent = name;
  cardWindowImage.src = link;
  cardWindowImage.alt = name;
  cardWindowName.textContent = name;

  // Evento de deletar
  cardTrashButton.addEventListener("click", () => cardElement.remove());

  // Evento de curtir
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("elements__button_type_like-active");
  });

  // Abrir janela de imagem
  buttonCardImage.addEventListener("click", () => {
    cardWindow.classList.add("elements__window_opened");
  });

  // Fechar janela de imagem
  windowCloseButton.addEventListener("click", () => {
    cardWindow.classList.remove("elements__window_opened");
  });

  return cardElement;
}

// Adiciona os cartões iniciais
initialCards.forEach(({ name, link }) => {
  const card = createCard(name, link);
  cardArea.append(card);
});

// -------------------------
// Edição de perfil
// -------------------------
function changeProfile(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector(".popup__item_type_name");
  const aboutInput = document.querySelector(".popup__item_type_about");
  const profileName = document.querySelector(".profile__name");
  const profileAbout = document.querySelector(".profile__description");

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closeEditPopup();
}

// Seleciona o botão de enviar do popup de perfil e o formulário do popup
const submitButton = document.querySelector(".popup__button_type_send");
const formElement = document.querySelector(".popup__container");

// Adiciona evento de submissão do formulário de perfil para alterar o perfil
formElement.addEventListener("submit", changeProfile);

// -------------------------
// Adicionar novo lugar
// -------------------------
const addForm = document.querySelector("#add-form");

addForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const nameInput = document.querySelector("#place-input");
  const linkInput = document.querySelector("#link-input");

  const newCard = createCard(nameInput.value, linkInput.value);
  cardArea.prepend(newCard);

  // Limpa campos e fecha popup
  nameInput.value = "";
  linkInput.value = "";
  closeAddPopup();
});