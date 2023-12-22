const nav = document.querySelector('.navbar-icons');

const isLogged = () => {
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged === 'isLogged') {
        const removeLogin = document.querySelector('.login');
        nav.removeChild(removeLogin);
        const logout = document.createElement('a');
        const img = document.createElement('img');
        img.src = '../public/assets/icons/login.svg';
        img.width = 18;
        logout.appendChild(img);
        logout.className = 'logout';
        logout.classList.add('logout');
        logout.style.cursor = 'pointer';
        logout.style.marginLeft = '1.5rem';
        nav.appendChild(logout);
        logout.addEventListener('click', () => {
            localStorage.removeItem('isLogged');
            window.location.href = 'login.html';
        });
    }
};

isLogged();