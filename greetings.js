const logInForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');
const loginInput = document.querySelector('#login-form input')
const HIDDEN_STRIMG = 'hidden';
const USERNAME_KEY = 'username'


function paintGreetings(name){
    greeting.classList.remove(HIDDEN_STRIMG);
    greeting.innerText = `Hello ${name}`;
}


function submitEvent(event){
    event.preventDefault();
    logInForm.classList.add(HIDDEN_STRIMG);
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    logInForm.classList.remove(HIDDEN_STRIMG);
    logInForm.addEventListener('submit', submitEvent);
} 
else{
    paintGreetings(savedUsername);
}
