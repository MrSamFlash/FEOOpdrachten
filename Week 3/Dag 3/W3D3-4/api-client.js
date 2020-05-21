const API_KEY = "97f937ab855cdda5191974e58462ac95";
const sessionID = "374693299dc250b0f7ef8b783a092f5b9e4c044b"

const getMovieGenres = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl);
        return await res.json();
    } catch {
        (error) => console.log(error);
    }
};

const getTopRatedMovies = async () => {
    const topUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    try {
        const res = await fetch(topUrl);
        return await res.json();
    } catch {
        (error) => console.log(error);
    }
};