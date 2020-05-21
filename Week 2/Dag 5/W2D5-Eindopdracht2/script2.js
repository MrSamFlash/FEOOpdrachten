const movieList = document.getElementById("movieList");

function createListItem(movie) {
    let newMovie = document.createElement("li");
    let link = document.createElement("a");
    let poster = document.createElement("img");

    link.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID);
    poster.src = movie.Poster;

    movieList.appendChild(newMovie).append(link);
    link.append(poster);
}

//Alle films
const allMovies = Array.from(movies);
allMovies.forEach(movie => {
    createListItem(movie);
});

//Filter recente films
const filterRecent = document.querySelector("#nieuweFilms");
const recentMovies = allMovies.filter((movie) => parseInt(movie.Year) >= 2014);
filterRecent.addEventListener('click', function () {
    movieList.innerHTML = " ";
    recentMovies.forEach(movie => {
        createListItem(movie);
    })
});

//Filter X-men films
const filterXMen = document.querySelector("#xMen");
const xMenMovies = allMovies.filter((movie) => movie.Title.includes("X-Men"));
filterXMen.addEventListener('click', function () {
    movieList.innerHTML = " ";
    xMenMovies.forEach(movie => {
        createListItem(movie);
    })
});

//Filter Avengers films
const filterAvengers = document.querySelector("#avengers");
const avengersMovies = allMovies.filter((movie) => movie.Title.includes("Avengers"));
filterAvengers.addEventListener('click', function () {
    movieList.innerHTML = " ";
    avengersMovies.forEach(movie => {
        createListItem(movie);
    })
});

//Filter Princess films
const filterPrincess = document.querySelector("#princess");
const princessMovies = allMovies.filter((movie) => movie.Title.includes("Princess"));
filterPrincess.addEventListener('click', function () {
    movieList.innerHTML = " ";
    princessMovies.forEach(movie => {
        createListItem(movie);
    })
});

//Filter Batman films
const filterBatman = document.querySelector("#batman");
const batmanMovies = allMovies.filter((movie) => movie.Title.includes("Batman"));
filterBatman.addEventListener('click', function () {
    movieList.innerHTML = " ";
    batmanMovies.forEach(movie => {
        createListItem(movie);
    })
});