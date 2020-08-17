const btnClaim = document.querySelector('#btnClaim');

const inputs = document.querySelectorAll('input');
const regEx4Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btnClaim.addEventListener('click', (event) => {
    // if (txtFirstName.value === '') {
    //     toggleClass(txtFirstName);
    // }
    let preventDefault = false;
    inputs.forEach((input) => {
        preventDefault =  validateInput_1(input);
    });

    if (!preventDefault) {
        event.preventDefault();
    }
});

inputs.forEach((input) => {
    input.addEventListener('input', validate);
});

function validate(event){
    validateInput_1(event.target);
}

function validateInput_1(inputElement) {
    
    if ((inputElement.value === '' && inputElement.id !== 'txtEmail') 
        || (inputElement.id === 'txtEmail' && !regEx4Email.test(inputElement.value))) 
    {
        inputElement.classList.add('invalid');
        let divErrorMsg =  inputElement.nextElementSibling;
        divErrorMsg.classList.add('visible');
        let imgError = divErrorMsg.nextElementSibling;
        imgError.classList.add('visible');
        return false;
    } else {
        inputElement.classList.remove('invalid');
        let divErrorMsg =  inputElement.nextElementSibling;
        divErrorMsg.classList.remove('visible');
        let imgError = divErrorMsg.nextElementSibling;
        imgError.classList.remove('visible');
        return true;
    }
}

// var toggled = false;
// function validateInput(event) {
//     console.log(event.target.value.length + ' ' + toggled);
//     if (event.target.value === ''){
//         toggleClass(event.target);
//         toggled = !toggled;
//     } else if (toggled) {
//         toggleClass(event.target);
//         toggled = !toggled;
//     }
// }

// function toggleClass(inputElement) {
//     inputElement.classList.toggle('invalid');
//     let divErrorMsg =  inputElement.nextElementSibling;
//     divErrorMsg.classList.toggle('visible');
//     let imgError = divErrorMsg.nextElementSibling;
//     imgError.classList.toggle('visible');
// }

