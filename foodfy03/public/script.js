const showDetails = document.querySelectorAll('.show-details');
const activePage = window.location.pathname;
const menuButtons = document.querySelectorAll('.menu a');

for (let button of showDetails) {
    button.addEventListener('click', function() {
        button.parentNode.querySelector('.details').classList.toggle('active');

        if(button.innerHTML == 'esconder') {
            button.innerHTML = 'mostrar';
        } else {
            button.innerHTML = 'esconder';
        };        
    });
};

for(let button of menuButtons) {
    if(activePage.includes(button.getAttribute('id'))) {
        button.classList.add('active');
    }
}

