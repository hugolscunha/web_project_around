//SEÇÃO PROFILE EDIT

// Variáveis da sessão profile
const editProfilePopup = document.querySelector("#profile"); // Variável da janela popup de edição de perfil(hidden)
const editProfileButton = document.querySelector("#edit-button"); // Botão com simbolo de caneta para abrir popup de edição
const closeEditButton = editProfilePopup.querySelector(".popup__button_type_close"); // Botão de fechar o popup de edição de perfil
const formElement = document.querySelector(".popup__form"); // Variável do formulário (tag form) do popup de edição de perfil
const submitButton = formElement.querySelector(".popup__button_type_send"); // Variável do botão de enviar do popup de edição de perfil

const inputs = formElement.querySelectorAll(".popup__item"); // Variável de todos os inputs do popup de edição de perfil
const nameInput = formElement.querySelector(".popup__item_type_name"); // Variável do input de nome do popup de edição de perfil
const aboutInput = formElement.querySelector(".popup__item_type_about"); // Variável do input de descrição do popup de edição de perfil

const profileName = document.querySelector(".profile__name"); // Variável do nome do perfil (o que vai aparecer no perfil depois de editado)
const profileAbout = document.querySelector(".profile__description"); // Variável da descrição do perfil (o que vai aparecer no perfil depois de editado)

// Funções de fechar popup de edição de perfil
function closeProfilePopup() {
  editProfilePopup.classList.remove("popup__opened");
}

// EventListeners de abrir popup de edição de perfil
editProfileButton.addEventListener("click", () => {
  editProfilePopup.classList.add("popup__opened");
});

// EventListener de fechar popup de edição de perfil
closeEditButton.addEventListener("click", closeProfilePopup);

// Validação dos inputs para ver se mostra o span de erro ou não (chamado pelo forEach dos inputs)
function validateInput(input) {
  const errorElement = editProfilePopup.querySelector(
    `.popup__error_type_${input.name}`
  )
  errorElement.textContent = input.validity.valid ? "" : input.validationMessage;
};

// Verifica se tem algum input inválido para controlar o botão de enviar do popup de edição de perfil
function hasInvalidInput() {
 return Array.from(inputs).some((input) => !input.validity.valid);
}

// Controla botão de enviar do popup de edição de perfil (chamado pelo forEach dos inputs)
function toggleButtonState() {
  submitButton.disabled = hasInvalidInput();
}

// Verfica os inputs a cada digitação para mostrar ou esconder o span de erro e controlar o botão de enviar do popup de edição de perfil
 inputs.forEach((input)=> {
  input.addEventListener("input", () => {
    validateInput(input);
    toggleButtonState();
  });
});


// Adiciona evento de submissão do formulário de perfil para alterar o perfil
formElement.addEventListener("submit", (evt) => {
  evt.preventDefault(); // Previne o comportamento padrão de recarregar a página ao enviar o formulário
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  closeProfilePopup();
});


//----------------------------------------------------------------------------------

//SEÇÃO ADD CARD

// Seleciona o botão de adicionar lugar e o popup de novo lugar
const addPopup = document.querySelector("#add-popup"); // Variável da janela de adicionar card (hidden)
const addButton = document.querySelector("#add-button"); // Botão de adicionar card (+)
const closeAddButton = document.querySelector("#close-add-popup"); // Botão de fechar popup addcard

// Função / EventListener de abrir o popup de adição de card
addButton.addEventListener("click", showAddPopup => {
  addPopup.classList.add("popup__opened");
})

// Função / EventListener de fechar popup de adição de card
closeAddButton.addEventListener("click", closeAddPopup => {
  addPopup.classList.remove("popup__opened");
});

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
//-------------------------------------------------------------------------------------

//SEÇÃO ELEMENTES

// Cards iniciais (objeto com as chaves de cada card inicial)
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
const template = document.querySelector(".elements__template"); // Variável de toda seção do template
const cardArea = document.querySelector(".elements__cards"); // variavel de card inicial (um único)

// Função para criar novo card 
function createCard(name, link) {
  //Variavel  que pega o conteúdo do card para criação de novas variaveis dos elementos dentro do card
  const cardElement = template.content.querySelector(".elements__card").cloneNode(true); 

  // Variáveis criadas para cada elemento do card
  const cardImage = cardElement.querySelector(".elements__image"); // Seleciona imagem do card
  const cardText = cardElement.querySelector(".elements__text"); // Seleciona texto do card
  const cardTrashButton = cardElement.querySelector(".elements__button_type_trash"); // Seleciona botão de lixeira
  const cardLikeButton = cardElement.querySelector(".elements__button_type_like"); // Seleciona botão de like
  const cardWindow = cardElement.querySelector(".elements__window");  // Seleciona 
  const buttonCardImage = cardElement.querySelector(".elements__image-button"); // Seleciona o botão que envolve a imagem para abri-la
  const cardWindowImage = cardElement.querySelector(".elements__window-image"); // Seleciona imagem aberta
  const cardWindowName = cardElement.querySelector(".elements__window-name"); // Seleciona texto da imagem quando aberta
  const windowCloseButton = cardElement.querySelector("#window-close-button"); // Seleciona botão de fechar da imagem aberta

  // Define conteúdo do card usando o objeto initial cards
  cardImage.src = link;
  cardImage.alt = name;
  cardText.textContent = name;
  cardWindowImage.src = link;
  cardWindowImage.alt = name;
  cardWindowName.textContent = name;

  // Evento de deletar um card
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
//------------------------------------------
