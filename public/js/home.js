let main = document.querySelector(".main");

fetch(genres + new URLSearchParams({
    api_key: key
}))
.then(res => res.json())
.then( data => {

    data.genres.forEach(element => {
        fetchMoviesListByGenres(element.id, element.name);
    });
});

const fetchMoviesListByGenres = (id, genres) => {
    fetch(movies + new URLSearchParams({
        api_key: key,
        with_genres: id,
        page: Math.floor(Math.random()*3) + 1
    }))
    .then(res => res.json())
    .then(data => {
        makeCategoryElement(`${genres}_movies`, data.results);
    })
    .catch(erro => console.log(erro));
};

const makeCategoryElement = (category, data) => {
    main.innerHTML +=   `<div class="movie-list">
                            <button class="pre-btn">
                                <img src="img/prev.png" alt="previous button">
                            </button>
                            <h1 class="movie-category">${category.replace("_", " ")}</h1>
                            <div class="movie-container" id="${category}">

                            </div>                            
                            <button class="next-btn">
                                <img src="img/next.png" alt="next button">
                            </button>
                        </div>`

    makeCards(category, data);
};

const makeCards = (id, data) => {
    const movieContainer = document.getElementById(id);

    data.forEach((element, i) => {
        if(element.backdrop_path == null){
            element.backdrop_path = item.poster_path;

            if(item.backdrop_path == null){
                return;
            }
        };

        movieContainer.innerHTML += `<div class="movie">
                                        <img src="${img}${element.backdrop_path}" alt="poster">
                                        <p class="movie-title">${element.title}</p>
                                    </div>`;

        if(i == data.length - 1){
            setTimeout(() =>{
                setupScrooling();
            }, 100);
        };
    });
}