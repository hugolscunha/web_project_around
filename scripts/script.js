// Variaveis
let editProfileButton = document.querySelector('.profile__edit-icon');
let editProfileModal = document.querySelector('.modal');
let closeModalButton = document.querySelector('.modal__close-button');

let formElement = document.querySelector('.modal__form');
let profileNameInput = document.querySelector('#profile-name');
let profileDescriptionInput = document.querySelector('#profile-description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');


let likeButtons = document.querySelector('.card__description-button');

// Initialize form with current values
profileNameInput.value = profileName.textContent.trim();
profileDescriptionInput.value = profileDescription.textContent.trim();


//
function hanldeProfileFormSubmit (evt) {
    evt.preventDefault();
    console.log('formulário enviado')
    profileName.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closeModal();
}

// Open modal function
function openModal() {
    editProfileModal.classList.add('modal__opened'); 
}

// Close modalfuntion
function closeModal() {
    editProfileModal.classList.remove('modal__opened');   
}


// Event listeners
editProfileButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
formElement.addEventListener('submit', hanldeProfileFormSubmit);




