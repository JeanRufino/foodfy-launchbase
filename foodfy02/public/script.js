const cards = document.querySelectorAll('.card');
const showDetails = document.querySelectorAll('.show-details');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const id = i;

    card.addEventListener('click', function() {
        window.location.href = `/recipes/${id}`;        
    });    
};

for (let button of showDetails) {
    button.addEventListener('click', function() {
        if(button.innerHTML == 'esconder') {
            button.innerHTML = 'mostrar';
        } else {
            button.innerHTML = 'esconder';
        };

        
    });
};

showDetails.forEach(button => {
    button.addEventListener('click', function () {
        button.parentNode.querySelector('.details').classList.toggle('active');
    })
});

