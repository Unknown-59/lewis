const form = document.querySelector('.loginForm');
form.addEventListener('submit', formHandler);

//Gestion du formulaire de connexion
function formHandler(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const save_email = localStorage.getItem('email');
    const password = data.get('password');
    const save_password = localStorage.getItem('password');
    const reMail = /\S+@\S+\.\S+/;
    if (!email.match(reMail) || email !== save_email) {
        displayEmailError();
    }
    if (password !== save_password) {
        displayPasswordError();
    }
    if (email === save_email && password === save_password) {
        console.log('Login successful');
        window.location.href = '../html/index.html';
    }

    data.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}

// Affichage des erreurs concernant l'email
const displayEmailError = () => {
    const error = document.createElement('span');
    error.textContent = 'Email is not valid';
    error.style.color = 'red';
    error.style.display = 'block';
    error.style.fontSize = '12px';
    error.className = 'email-error';
    form.insertBefore(error, form.firstChild);
}

// Affichage des erreurs concernant le mot de passe
const displayPasswordError = () => {
    const error = document.createElement('span');
    error.textContent = 'Passwords do not match';
    error.style.color = 'red';
    error.style.display = 'block';
    error.style.fontSize = '12px';
    error.className = 'password-error';
    form.insertBefore(error, form.firstChild);
};