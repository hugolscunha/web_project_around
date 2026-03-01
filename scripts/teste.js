// Variáveis da sessão add-card
const addPopup = document.querySelector("#add-popup"); // Variável da janela popup de adição de novo lugar
const addButton = document.querySelector("#add-button"); // Botão com simbolo de mais para abrir popup de adição de novo lugar
const closeAddButton = addPopup.querySelector(".popup__button_type_close"); // Botão de fechar o popup de adição de novo lugar
const addForm = document.querySelector("#add-form"); // Variável do formulário (tag form) do popup de adição de card
    
const submitButton = addForm.querySelector(".popup__button_type_send"); // Variável do botão de enviar do popup de adição de novo lugar

const addInputs = addForm.querySelectorAll(".popup__item"); // Variável de todos os inputs do popup de adição de novo lugar
const nameInput = addForm.querySelector(".popup__item_type_name"); // Variável do input de nome do popup de adição de novo lugar
const linkInput = addForm.querySelector(".popup__item_type_link"); // Variável do input de link da imagem do popup de adição de novo lugar

const localName = addForm.querySelector(".elements__text"); // Variável do nome do perfil (o que vai aparecer no perfil depois de editado)
const localLink = addForm.querySelector(".elements__window-image"); // Variável da descrição do perfil (o que vai aparecer no perfil depois de editado)


// Função de fechar popup de adição de card
function closeAddPopup() {
  addPopup.classList.remove("popup__opened");
};

// EventListener de abrir o popup de adição de card
addButton.addEventListener("click", () => {
  addPopup.classList.add("popup__opened");
});

// EventListener de fechar popup de adição de card
closeAddButton.addEventListener("click", closeAddPopup);

// Validação dos inputs para ver se mostra o span de erro ou não (chamado pelo forEach dos inputs)
function validateInput(input) {
  const errorElement = addPopup.querySelector(
    `.popup__error_type_${input.name}`
  )
  errorElement.textContent = input.validity.valid ? "" : input.validationMessage;
};



//comum aos popups

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