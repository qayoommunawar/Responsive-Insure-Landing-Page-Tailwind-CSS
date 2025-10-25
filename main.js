const toggleBtn = document.querySelector('.toggle-btn');
const navMenu = document.querySelector('.nav-menu');
const iconBtn = document.querySelector('.btn-icon');
const bodyTag = document.body;

// Handling the toggle button click event

toggleBtn.addEventListener('click', () => {
    const isActive = toggleBtn.getAttribute('aria-expanded') === 'true';
    if(!isActive){
        navMenu.classList.remove('hidden');
        navMenu.classList.add('flex')
        toggleBtn.setAttribute('aria-expanded', 'true');
        iconBtn.src = './images/icon-close.svg';
        bodyTag.classList.add('overflow-hidden');
    }else{
        navMenu.classList.add('hidden');
        navMenu.classList.remove('flex')
        toggleBtn.setAttribute('aria-expanded', 'false');
        iconBtn.src = './images/icon-hamburger.svg';
        bodyTag.classList.remove('overflow-hidden');
    
    }
})