//Seleciuona o botão de edição e o popup de perfil
const editButton = document.querySelector("#edit-button"); //Botão para abrir popup de dição
const editPopup = document.querySelector("#profile"); // Popup de edição de perfil

// Função de abrir o popup de edição de perfil
function showPopup() {
    editPopup.classList.add("popup__opened");// Adiciona a classe popup__opened para abrir popup de edição de perfil
}

// Adiciona um evento de clicque no botão de edição de perfil para mostrar popup
editButton.addEventListener("click", showPopup);// Exibe o popup ao clicar no botão

// Seleciona o botão de adicionar lugar e o popup de novo lugar
const addButton = document.querySelector("#add-button");// Botão de adicionar novo lugar 
const addPopup = document.querySelector("#add-popup");// Popup de adicionar cartãp

// Função de abrir o popup de novo lugar
function showAddPopup() {
    addPopup.classList.add("popup__opened");// Adiciona a clasee popup__opened para abrir o popup de novo lugar
}

// Adiciona um evento de clique no botão de adicionar novo lugar para mostrar o popup
addButton.addEventListener("click", showAddPopup);// Exibe o popup ao clicar no botão

// Seleciona o popup genérico e o botão de fechar o popup
const popup = document.querySelector(".popup");// Qualquer popup
const closeButton = document.querySelector(".popup__button_type_close"); // Seleciona botão de fechar do popup

// Função para fechar popup
function closePopup() {
    popup.classList.remove("popup__opened");
}

// Adiciona um evento de clique no botão de fechar do popup para fechar o popup
closeButton.addEventListener("click", closePopup);







