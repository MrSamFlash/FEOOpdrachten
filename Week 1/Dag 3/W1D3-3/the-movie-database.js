let Labyrinth = {
    title: "Labyrinth",
    duration: 109,
    stars: ["Jim Henson", " Frank Oz", " Jerry Nelson", " Dave Goelz"]
}

const myMovie = (movie) => {
    console.log(movie.title + " lasts for " + movie.duration + " minutes. It stars " + movie.stars + ".");
}

console.log(myMovie(Labyrinth));