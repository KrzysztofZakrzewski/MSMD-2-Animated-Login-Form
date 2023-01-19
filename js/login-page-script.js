// VARIABLES

const login = document.querySelector('.login');
const create = document.querySelector('.create');
const singin = document.querySelector('.singin');
const singup = document.querySelector('.singup');

// FUNCTIONS

// Function that close SingUp form and show SingIn form.
// Only this function in necessary to close and open (swich) between SingIn and SingUp forms
// Secend function is optional and redy in case of development code, just in case.

const apperSingIn = () => {
	singin.classList.toggle('singinForm');
	singup.classList.toggle('singUpclose');
};

// Second function does same as first one (apperSingIn)

// const apperSingUp = () => {
// 	singin.classList.toggle('singinForm');
// 	singup.classList.toggle('singUpclose');
// };

// ADDEVENTLISTENER'S

login.addEventListener('click', apperSingIn);
// We can elicit second function apperSingUp
create.addEventListener('click', apperSingIn);

// create.addEventListener('click', apperSingUp);
