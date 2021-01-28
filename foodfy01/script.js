const modal = document.querySelector('#modal');
const cards = document.querySelectorAll('.card');

for(let card of cards) {
    card.addEventListener('click', function() {
        modal.classList.add('active');
        document.querySelector(".modal-card-info").innerHTML = card.innerHTML;

        document.querySelector('.close-modal').addEventListener('click', () => {
            modal.classList.remove('active');
        });
    });
};

