const newBtn = document.getElementById("new-btn");
const avengerBtn = document.getElementById("avengers-btn");
const xmenBtn = document.getElementById("xmen-btn");
const princessBtn = document.getElementById("princess-btn");
const batmanBtn = document.getElementById("batman-btn");
const buttons = document.getElementsByClassName("input");
const moviesPosters = document.getElementById("movie-posters").getElementsByTagName("ul");
const moviesPostersLi = document
    .getElementById("movie-posters")
    .getElementsByTagName("ul")[0];
const newLI = document.createElement("li");
const url = new URLSearchParams("https://m.media-amazon.com/images");




const addMoviesToDom = movies.map((movie) => {
    movies.forEach((movie) => {
        let newLi = document.createElement("li");
        let newA = document.createElement("a");
        let newImg = document.createElement("img");

        newLi.appendChild(newA);
        newA.appendChild(newImg);
        moviesPosters.appendChild(newLi);

    });
})




/*
const moviesArray = movies.map  ;

const addMoviesToDom = (moviesArray) => {
  moviesArray.forEach((movie) => {
    let newLi = document.createElement("li");
    newLi.setAttribute ("class", "movies")
    let newA = document.createElement("a");
    let newImg = document.createElement("img");
    newImg.setAttribute("alt", "this is the img");
    newImg.setAttribute("src", "movie.Poster");

    newLi.appendChild(newA);
    newA.appendChild(newImg);
    moviesPosters.append(newLi);
  });
};

/*

const newMovies = movies.filter((movie) => {

    return movie.Year >= "2014"
});

const avengersMovie = movies.filter((movie) => {

    return movie.Title.includes("Avengers")
});


const xmenMovie = movies.filter((movie) => {

    return movie.Title.includes("X-Men")
});

const princessMovie = movies.filter((movie) => {

    return movie.Title.includes("Princess")
});

const batmanMovie = movies.filter((movie) => {

    return movie.Title.includes("Batman")
});




newBtn.addEventListener("click", () => {

    if (newBtn.checked = true) {

        return console.log(newMovies)
    }
});

avengerBtn.addEventListener("click", () => {

    if (avengerBtn.checked = true) {

        return console.log (avengersMovie)
    }
});
xmenBtn.addEventListener("click", (e) => {

    if (xmenBtn.checked = true) {

        return console.log(xmenMovie)
    }
});

princessBtn.addEventListener("click", (e) => {

    if (princessBtn.checked = true) {

        return console.log(princessMovie)
    }
});

batmanBtn.addEventListener("click", (e) => {

    if (batmanBtn.checked = true) {

        return console.log(batmanMovie)
    }
});

*/
