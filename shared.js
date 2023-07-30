const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
}

const closeModal = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
};

backdrop.addEventListener('click', () => {
    mobileNav.style.display = 'none';
    closeModal();
});

modalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});