const token = 'KVNM5ZK-RM6MGBM-GP513SR-GWK3CQN';

const headers = new Headers({
    'X-API-KEY': token
});

fetch('https://api.kinopoisk.dev/v1/movie/random', {
    method: 'GET',
    headers: headers
})
    .then(response => response.json()) // Преобразовать ответ в JSON
    .then(data => {

        console.log(data);
        //заголовок

        const titleBanner = document.querySelector('.title-banner h1');
        titleBanner.textContent = '';
        const titleText = document.createTextNode(data.name);
        titleBanner.appendChild(titleText);

        // описание фильма

        const description = document.querySelector(".description-banner");
        description.textContent = '';
        if (data.description !== null) {
            const DescriptionText = document.createTextNode(data.description);
            description.appendChild(DescriptionText);
        }
        else {
            const DescriptionText = document.createTextNode("Нет описания :( ");
            description.appendChild(DescriptionText);
        }

        // картинка
        if(data.backdrop.url !== null){
        const oldImg = document.querySelector(".banner-image");
        oldImg.src = data.backdrop.url;}
        else{
            const oldImg = document.querySelector(".banner-image");
            oldImg.src = data.poster.url;
        }

        // imdb

        const imdb = document.querySelector(".imdb p");
        imdb.textContent = '';
        imdb.textContent = data.rating.imdb + ' / 10';

        // кинопоиск

        const kinopoisk = document.querySelector(".kinopoisk p");
        kinopoisk.textContent = '';
        kinopoisk.textContent = data.rating.kp + ' / 10';

        // трейлер
if(data.videos.trailers.length === 0){
    const trailer = document.querySelector(".trailer");
    trailer.remove()
}
else {
    const modal = document.getElementById("myModal");
    const iframe = modal.querySelector("iframe");
    const newUrl = data.videos.trailers[0].url; // Замените это на нужный вам URL
    console.log(newUrl);
    iframe.src = newUrl;
}
    })
    .catch(error => {
        // Обработать ошибки
        console.error('Произошла ошибка:', error);
    });

// карточки фильмов в слайдере

fetch('https://api.kinopoisk.dev/v1.3/movie?page=1&limit=8', {
    method: 'GET',
    headers: headers
})
    .then(response => response.json()) // Преобразовать ответ в JSON
    .then(data => {
        const swiperWrapper = document.getElementById('films') // swiper-wrapper

        for (let i = 0; i < 8; i++) {
          const cardImg = data.docs[i].poster.previewUrl;
          const cardName = data.docs[i].name;
          const cardCountries = data.docs[i].countries[0].name;
          const cardImdb = data.docs[i].rating.imdb;
          const cardKinopoisk = data.docs[i].rating.kp;
          const genre = data.docs[i].genres[0].name;
          const year = data.docs[i].year;
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');

            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="/#">
        <div class="favorite">
            <img src="./img/Heart.svg">
            <div class="circle"></div>
        </div>
    </a>
    <img src="${cardImg}">
    <a href="/#">
        <p class="small-text">${cardCountries} , ${year}</p>
        <p class="big-text">${cardName}</p>
        <div class="card-tags">
            <div class="card-imdb">
                <img src="./img/imdb.png">
                <p>${cardImdb}</p>
            </div>
            <div class="card-kinopoisk">
                <img src="./img/kinopoisk.png">
                <p>${cardKinopoisk}</p>
            </div>
        </div>
    </a>
    <p class="small-text">${genre}</p>
    </div></div>
  `;

            slide.appendChild(card); // Добавляем карточку в слайд
            swiperWrapper.appendChild(slide); // Добавляем слайд в контейнер фильмов

        }

    })
    .catch(error => {

        console.error('Произошла ошибка:', error);
    });


//сериалы

fetch('https://api.kinopoisk.dev/v1.3/movie?page=1&limit=8&isSeries=true', {
    method: 'GET',
    headers: headers
})
    .then(response => response.json()) // Преобразовать ответ в JSON
    .then(data => {
        const swiperWrapperSerial = document.getElementById('serial') // swiper-wrapper

        for (let i = 0; i < 8; i++) {
            const cardImg = data.docs[i].poster.previewUrl;
            const cardName = data.docs[i].name;
            const cardCountries = data.docs[i].countries[0].name;
            const cardImdb = data.docs[i].rating.imdb;
            const cardKinopoisk = data.docs[i].rating.kp;
            const genre = data.docs[i].genres[0].name;
            const year = data.docs[i].year;
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');

            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="/#">
        <div class="favorite">
            <img src="./img/Heart.svg">
            <div class="circle"></div>
        </div>
    </a>
    <img src="${cardImg}">
    <a href="/#">
        <p class="small-text">${cardCountries} , ${year}</p>
        <p class="big-text">${cardName}</p>
        <div class="card-tags">
            <div class="card-imdb">
                <img src="./img/imdb.png">
                <p>${cardImdb}</p>
            </div>
            <div class="card-kinopoisk">
                <img src="./img/kinopoisk.png">
                <p>${cardKinopoisk}</p>
            </div>
        </div>
    </a>
    <p class="small-text">${genre}</p>
    </div></div>
  `;

            slide.appendChild(card); // Добавляем карточку в слайд
            swiperWrapperSerial.appendChild(slide);
        }

        })
    .catch(error => {

        console.error('Произошла ошибка:', error);
    });

// мультфильмы

fetch('https://api.kinopoisk.dev/v1.3/movie?page=1&limit=8&genres.name=%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC', {
    method: 'GET',
    headers: headers
})
    .then(response => response.json()) // Преобразовать ответ в JSON
    .then(data => {
        const swiperWrapperMult = document.getElementById('mult') // swiper-wrapper

        for (let i = 0; i < 8; i++) {
            const cardImg = data.docs[i].poster.previewUrl;
            const cardName = data.docs[i].name;
            const cardCountries = data.docs[i].countries[0].name;
            const cardImdb = data.docs[i].rating.imdb;
            const cardKinopoisk = data.docs[i].rating.kp;
            const genre = data.docs[i].genres[0].name;
            const year = data.docs[i].year;
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');

            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="/#">
        <div class="favorite">
            <img src="./img/Heart.svg">
            <div class="circle"></div>
        </div>
    </a>
    <img src="${cardImg}">
    <a href="/#">
        <p class="small-text">${cardCountries} , ${year}</p>
        <p class="big-text">${cardName}</p>
        <div class="card-tags">
            <div class="card-imdb">
                <img src="./img/imdb.png">
                <p>${cardImdb}</p>
            </div>
            <div class="card-kinopoisk">
                <img src="./img/kinopoisk.png">
                <p>${cardKinopoisk}</p>
            </div>
        </div>
    </a>
    <p class="small-text">${genre}</p>
    </div></div>
  `;

            slide.appendChild(card); // Добавляем карточку в слайд
            swiperWrapperMult.appendChild(slide);
        }

    })
    .catch(error => {

        console.error('Произошла ошибка:', error);
    });

// актеры
fetch('https://api.kinopoisk.dev/v1/person?page=1&limit=8&photo=%21null&countAwards=8', {
    method: 'GET',
    headers: headers
})
    .then(response => response.json()) // Преобразовать ответ в JSON
    .then(data => {
        const swiperWrapperActors = document.getElementById('actors') // swiper-wrapper

        for (let i = 0; i < 8; i++) {

            const ActorPhoto = data.docs[i].photo;
            const ActorName = data.docs[i].name;


            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');

            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${ActorPhoto}">
                        <a href="/#">
                            <p class="big-text">${ActorName}</p>
                        </a>
  `;

            slide.appendChild(card); // Добавляем карточку в слайд
            swiperWrapperActors.appendChild(slide);
        }

    })
    .catch(error => {

        console.error('Произошла ошибка:', error);
    });
