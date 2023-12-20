const form = document.querySelector('.signUpForm');
form.addEventListener('submit', formHandler);

//Gestion du formulaire d'enregistrement

function formHandler(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get('name');
    const email = data.get('email');
    const password = data.get('password');
    const passwordConfirm = data.get('password2');
    const reName = /^\D*$/;
    if (!name.match(reName)) {
        displayNameError();
        return;
    }
    const reMail = /\S+@\S+\.\S+/;
    if (!email.match(reMail)) {
        displayEmailError();
    }
    if (password !== passwordConfirm) {
        displayPasswordError();
        return;
    }
    data.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location.href = '../index.html';
}

// Affichage des erreurs concernant le nom
const displayNameError = () => {
    const error = document.createElement('span');
    error.textContent = 'Name is not valid';
    error.style.color = 'red';
    error.style.display = 'block';
    error.style.fontSize = '12px';
    error.className = 'name-error';
    form.insertBefore(error, form.firstChild);
};


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