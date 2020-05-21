const API_KEY = "97f937ab855cdda5191974e58462ac95";

const getData = async () => {
    try {
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
        const res = await fetch(apiUrl);
        console.log("The response from the API in getData function: ", res);
        const data = await res.json();
        console.log("The data in getData function: ", data);
        return data;
    } catch {
        (error) => console.log(error);
    }
};