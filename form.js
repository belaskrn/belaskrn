const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const login = document.getElementById("login")

login.addEventListener('click', (e) => {
    if(email.value === '' || email.value == null) {
        email.style.border= '1.5px solid red';
        return false
    } else {
        email.style.border = '0px';
    };

    if(password.value === '' || password.value == null) {
        password.style.border = '2px solid red';
        return false
    } else {
        password.style.border = '0px';
    };

});