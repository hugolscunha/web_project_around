// Variaveis Profile e Form
let editProfileButton = document.querySelector('.profile__button_type_edit');
let editProfileForm = document.querySelector('.modal');
let closeModalButton = document.querySelector('.modal__close-button');


//EventListeners/Função para abrir o formulário
editProfileButton.addEventListener("click", (abrirFormulario)=>{ 
    editProfileForm.classList.add("modal__opened");
});

//EventListener/Função para fechar formulário
closeModalButton.addEventListener("click", (fecharFormulario) => {
    editProfileForm.classList.remove("modal__opened");
});


// Variaveis do template dos cards
const template = document.querySelector(".card__template").content;
const templateContainer = document.querySelector(".elements__cards");

const cardsData = [
    {
        title: "Rio de Janeiro",
        image: "https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg"
    },
    {
        title: "Salvador",
        image: "https://images.pexels.com/photos/31792594/pexels-photo-31792594.jpeg"
    },
    {
        title: "São Paulo",
        image: "https://images.pexels.com/photos/1535775/pexels-photo-1535775.jpeg"
    },
    {
        title: "Foz do Iguaçu",
        image: "https://images.pexels.com/photos/1296396/pexels-photo-1296396.jpeg"
    },
    {
        title: "Manaus",
        image: "https://images.pexels.com/photos/7903925/pexels-photo-7903925.jpeg"
    },
    {
        title: "Bonito",
        image: "https://images.pexels.com/photos/861879/pexels-photo-861879.png"
    }
]

function createCard(data) {
    const card = template.cloneNode(true);

    const cardImage = card.querySelector(".card__image");
    const cardTitle = card.querySelector(".card__title");
    // const cardDeleteButton = card.querySelector(".card__delete-button");
    // const cardLikeButton = card.querySelector(".card__like-button");

    // Coloca
    cardImage.src = data.image;
    cardImage.alt = data.title;
    cardTitle.textContent = data.title;

    return card
}

cardsData.forEach(data => {
    const cardElement = createCard(data);
    templateContainer.append(cardElement);
});









let formElement = document.querySelector('.modal__form');
let profileNameInput = document.querySelector('#profile-name'); // Input de nome
let profileDescriptionInput = document.querySelector('#profile-description'); // Input de descrição
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');