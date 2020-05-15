const movieList = document.getElementById("movieList");

//Alle films
const allMovies = Array.from(movies);
allMovies.forEach(movie => {
    let newMovie = document.createElement("li");
    let link = document.createElement("a");
    let poster = document.createElement("img");

    link.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID);
    poster.src = movie.Poster;

    movieList.appendChild(newMovie).append(link);
    link.append(poster);
});

//Filter recente films
const filterRecent = document.querySelector("#nieuweFilms");
const recentMovies = allMovies.filter((movie) => parseInt(movie.Year) >= 2014);
filterRecent.addEventListener('click', function () {
    movieList.innerHTML = " ";
    recentMovies.forEach(movie => {
        let recentList = document.createElement("li");
        let link = document.createElement("a");
        let poster = document.createElement("img");

        link.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID);
        poster.src = movie.Poster;

        movieList.appendChild(recentList).append(link);
        link.append(poster);
    })
});

//Filter X-men films
const filterXMen = document.querySelector("#xMen");
const xMenMovies = allMovies.filter((movie) => movie.Title.includes("X-Men"));
filterXMen.addEventListener('click', function () {
    movieList.innerHTML = " ";
    xMenMovies.forEach(movie => {
        let xMenList = document.createElement("li");
        let link = document.createElement("a");
        let poster = document.createElement("img");

        link.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID);
        poster.src = movie.Poster;

        movieList.appendChild(xMenList).append(link);
        link.append(poster);
    })
});

//Filter Avengers films
const filterAvengers = document.querySelector("#avengers");
const avengersMovies = allMovies.filter((movie) => movie.Title.includes("Avengers"));
filterAvengers.addEventListener('click', function () {
    movieList.innerHTML = " ";
    avengersMovies.forEach(movie => {
        let avengersList = document.createElement("li");
        let link = document.createElement("a");
        let poster = document.createElement("img");

        link.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID);
        poster.src = movie.Poster;

        movieList.appendChild(avengersList).append(link);
        link.append(poster);
    })
});

//Filter Princess films
const filterPrincess = document.querySelector("#princess");
const princessMovies = allMovies.filter((movie) => movie.Title.includes("Princess"));
filterPrincess.addEventListener('click', function () {
    movieList.innerHTML = " ";
    princessMovies.forEach(movie => {
        let princessList = document.createElement("li");
        let link = document.createElement("a");
        let poster = document.createElement("img");

        link.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID);
        poster.src = movie.Poster;

        movieList.appendChild(princessList).append(link);
        link.append(poster);
    })
});

//Filter Batman films
const filterBatman = document.querySelector("#batman");
const batmanMovies = allMovies.filter((movie) => movie.Title.includes("Batman"));
filterBatman.addEventListener('click', function () {
    movieList.innerHTML = " ";
    batmanMovies.forEach(movie => {
        let batmanList = document.createElement("li");
        let link = document.createElement("a");
        let poster = document.createElement("img");

        link.setAttribute('href', 'https://www.imdb.com/title/' + movie.imdbID);
        poster.src = movie.Poster;

        movieList.appendChild(batmanList).append(link);
        link.append(poster);
    })
});