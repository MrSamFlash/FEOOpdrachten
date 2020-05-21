async function setTopRated() {
    const movieList = document.querySelector(".movieList");

    const data = await getTopRatedMovies();
    console.log("Hier is je data:", data);
    data.topMovies.forEach(topMovie => {
        const li = document.createElement("li");
        const newItemContent = document.createTextNode(
            `Dit is een top rated film: ${topMovie.name} met id ${topMovie.id}`
        );
        li.appendChild(newItemContent);
        movieList.append(newItem);
    });
}
setTopRated();


