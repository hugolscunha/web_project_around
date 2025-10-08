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
const addPopup = document.querySelector("#add-popup");// Popup de adicionar cartão

// Função de abrir o popup de Card novo
function showAddPopup() {
    addPopup.classList.add("popup__opened");// Adiciona a clasee popup__opened para abrir o popup de novo Card
}

// Adiciona um evento de clique no botão de adicionar novo lugar para mostrar o popup
addButton.addEventListener("click", showAddPopup);// Exibe o popup ao clicar no botão

// Seleciona o botão de fechar dos popups 
const closeEditButton = document.querySelector(".popup__button_type_close"); // Seleciona botão de fechar do popup edit
const closeAddButton = document.querySelector("#close-add-popup"); // Seleciona botão de fechar do popup edit

// Função de fechar popup de edição de perfil
function closeEditPopup() {
    editPopup.classList.remove("popup__opened");
}

// Função de fechar popup de novo Card
function closeAddPopup() {
    addPopup.classList.remove("popup__opened");
}

// Adiciona eventos de clique em cada botão de fechar de cada popup
closeEditButton.addEventListener("click", closeEditPopup);
closeAddButton.addEventListener("click", closeAddPopup);

// Array de objetos representando os cartões iniciais com nome e link da imagem
const initialCards = [
    {
        name: "Fernando de Noronha",
        link: "https://images.pexels.com/photos/11159713/pexels-photo-11159713.jpeg",
    }

    {
        name: "Gramado",
        link: "https://www.pexels.com/pt-br/foto/nova-petropolis-rio-grande-do-sul-brasil-18171957/",
    }

    {
        name: "Manaus",
        link: "https://images.pexels.com/photos/29759408/pexels-photo-29759408.jpeg",
    }

    {
        name: "Rio de Janeiro",
        link: "https://images.pexels.com/photos/1458036/pexels-photo-1458036.jpeg",
    }

    {
        name: "Salvador",
        link: "https://images.pexels.com/photos/31792594/pexels-photo-31792594.jpeg",
    }

    {
        name: "São Paulo",
        link: "https://images.pexels.com/photos/72479/pexels-photo-72479.jpeg",
    }
]

// Seleciona o template de cartão e área de onde os cartões serão adicionados
const template = document.querySelector("elements__template");
const cardArea = document.querySelector("elements__cards");

// Adiciona os cartões iniciais na área de cartões
initialCards.forEach()