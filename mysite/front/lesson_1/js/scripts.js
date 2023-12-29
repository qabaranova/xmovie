

    var swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    direction: getDirection(),
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
    on: {
    resize: function () {
    swiper.changeDirection(getDirection());
},
},
});

    function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}

console.log("Файл подключен");

    var openModalButton = document.getElementById("open-modal-button");
    var closeModalButton = document.getElementById("close-modal-button");

    // Найти модальное окно
    var modal = document.getElementById("myModal");


    openModalButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });