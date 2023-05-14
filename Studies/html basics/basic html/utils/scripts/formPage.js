const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const joinCheckbox = document.getElementById("join-name");
const submitButton = document.getElementById("submit-button");
const textArea = document.getElementById("text-area");

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(firstNameInput.value);
    console.log(lastNameInput.value);

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let joinStatus = joinCheckbox.checked;
    let upperFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    let upperLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    if (joinStatus == false) {
        textArea.textContent = `Your first name is ${upperFirstName} and 
        your last name is ${upperLastName}`
    } else {
        textArea.textContent = `Your name is ` + upperFirstName.concat(" ", upperLastName);
    };
});
