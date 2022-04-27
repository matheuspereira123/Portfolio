var carregar = document.querySelector('.loader');

window.addEventListener('load', function() {
    carregar.classList.add('desaparecer');

    setTimeout(function() {
        carregar.style.display = 'none';
    }, 3000);
});