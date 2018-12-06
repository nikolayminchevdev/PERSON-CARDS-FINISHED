var uniqueID = 0;
var peopleCardsArr = [];
var person = {};
var getTheInfo;
var savebutton = document.getElementById("SaveInfoButton");
var deleteButton = document.getElementById("DeleteButton");
savebutton.addEventListener('click', function(){cardSaveInfo(cardtarget)});
deleteButton.addEventListener('click', function(){deleteCard(cardtarget)});

function expandItem() {
    var itemToExpand = document.querySelector('.EditPeopleWrapper');
    itemToExpand.classList.toggle('expand');

    var itemToChange = document.querySelector('.EditPageButton');
    itemToChange.classList.toggle('editColor');

    var opened = itemToChange.classList.contains('editColor');

    if (opened) {
        itemToChange.innerHTML = "Stop Editing";
    }
    else {
        itemToChange.innerHTML = "Edit";
    }
}

function inputValue(value, title) {
    person[title] = value;
}

function cardCreate() {

    var personCard = document.createElement('DIV');
    personCard.className = "PersonCard";
    personCard.dataset.id = uniqueID;

    var personImage = document.createElement('DIV');
    personImage.className = "PersonImage";

    var personName = document.createElement('DIV');
    personName.className = "PersonName";
    personName.innerHTML = person['name'];

    var personJob = document.createElement('DIV');
    personJob.className = "personJobTitle";
    personJob.innerHTML = person['job'];

    var personEmail = document.createElement('DIV');
    personEmail.className = "eMail";
    personEmail.innerHTML = person['email'];

    var personPhone = document.createElement('DIV');
    personPhone.className = "PersonPhoneNumber";
    personPhone.innerHTML = person['phone'];

    document.querySelector('.PeopleCardWrapper').appendChild(personCard);
    personCard.appendChild(personImage);
    personCard.appendChild(personName);
    personCard.appendChild(personJob);
    personCard.appendChild(personEmail);
    personCard.appendChild(personPhone);

    document.querySelector('.PeopleCardsContainer').classList.add('PeopleCardsContainer--hidden');

    peopleCardsArr.push(person);

    personCard.addEventListener('click', selectedCard);

    person = {
        name: personName.innerHTML,
        job: personJob.innerHTML,
        email: personEmail.innerHTML,
        phone: personPhone.innerHTML
    };

    uniqueID += 1;

}

function selectedCard(event) {
    var active = document.querySelector('.PersonCard--active');
    var change = event.target.classList.contains('PersonCard--active');
    var putAsideAddPersonButton = document.getElementById('AddOnePerson');
    var selectSaveButton = document.getElementById('SaveInfoButton');
    var selectDeleteButton = document.getElementById('DeleteButton');

    if (active) {
        active.classList.remove('PersonCard--active');
        putAsideAddPersonButton.removeAttribute('style', 'right:-400px');
        selectSaveButton.setAttribute('style', 'display: none');
        selectDeleteButton.setAttribute('style', 'display: none');
    }

    if (!change) {
        event.target.classList.add('PersonCard--active');
        putAsideAddPersonButton.setAttribute('style', 'right:-400px');
        selectSaveButton.setAttribute('style', 'display: block');
        selectDeleteButton.setAttribute('style', 'display: block');
    }

    var redactName = document.querySelector('.EditPeopleWrapper [name = firstName]');
    var redactJob = document.querySelector('.EditPeopleWrapper [name = job]');
    var redactEmail = document.querySelector('.EditPeopleWrapper [name = email]');
    var redactPhone = document.querySelector('.EditPeopleWrapper [name = phone]');

    getTheInfo = peopleCardsArr[event.target.dataset.id];
    redactName.value = getTheInfo.name;
    redactJob.value = getTheInfo.job;
    redactEmail.value = getTheInfo.email;
    redactPhone.value = getTheInfo.phone;

    person = {
        name: getTheInfo.name,
        job: getTheInfo.job,
        email: getTheInfo.email,
        phone: getTheInfo.phone
    };

    cardtarget = event.target.dataset.id;
}

function cardSaveInfo(cardId) {
    var selectedCardName = document.querySelector("[data-id ='" + cardId + "'] .PersonName");
    var selectedCardJob = document.querySelector("[data-id ='" + cardId + "'] .personJobTitle");
    var selectedCardEmail = document.querySelector("[data-id ='" + cardId + "'] .eMail");
    var selectedCardPhone = document.querySelector("[data-id ='" + cardId + "'] .PersonPhoneNumber");

    var redactName = document.querySelector('.EditPeopleWrapper [name = firstName]');
    var redactJob = document.querySelector('.EditPeopleWrapper [name = job]');
    var redactEmail = document.querySelector('.EditPeopleWrapper [name = email]');
    var redactPhone = document.querySelector('.EditPeopleWrapper [name = phone]');

    getTheInfo.name = redactName.value;
    getTheInfo.job = redactJob.value;
    getTheInfo.email = redactEmail.value;
    getTheInfo.phone = redactPhone.value;

    selectedCardName.innerHTML = getTheInfo.name;
    selectedCardJob.innerHTML = getTheInfo.job;
    selectedCardEmail.innerHTML = getTheInfo.email;
    selectedCardPhone.innerHTML = getTheInfo.phone;
}

function deleteCard(specificID)
{
    var selectedCard = document.querySelector("[data-id ='" + specificID + "'].PersonCard");
    selectedCard.remove();

    var putAsideAddPersonButton = document.getElementById('AddOnePerson');
    var selectSaveButton = document.getElementById('SaveInfoButton');
    var selectDeleteButton = document.getElementById('DeleteButton');

    putAsideAddPersonButton.removeAttribute('style', 'right:-400px');
    selectSaveButton.setAttribute('style', 'display: none');
    selectDeleteButton.setAttribute('style', 'display: none');
}