const login = document.querySelector('.login');
const create = document.querySelector('.create');
const singin = document.querySelector('.singin');
const singup = document.querySelector('.singup');

const apperSingIn = () => {
	singin.classList.toggle('singinForm');
	singup.classList.toggle('singUpclose');
};

// const apperSingUp = () => {
// 	singin.classList.toggle('singinForm');
// 	singup.classList.toggle('singUpclose');
// };

login.addEventListener('click', apperSingIn);
create.addEventListener('click', apperSingIn);

// create.addEventListener('click', apperSingUp);
