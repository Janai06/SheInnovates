const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const welcome = document.querySelector('.welcome');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
 
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    welcome.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    welcome.classList.add('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    welcome.classList.add('active');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    welcome.classList.remove('active');
});

document.querySelector('#welcomeLogin').addEventListener('click', e =>
  document.querySelector('#btnLogin').click());
