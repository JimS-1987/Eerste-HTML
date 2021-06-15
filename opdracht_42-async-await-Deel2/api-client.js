

async function getGenre() {
    const API_KEY = ('fba9416fe2921a470b90a29ef5793f0a');
    const apiUrl = ('https://api.themoviedb.org/3/genre/movie/list?api_key=fba9416fe2921a470b90a29ef5793f0a');
    const GetGenre = ('')
    try {
        const res = await fetch(apiUrl, {
            method: 'GET',

        }).then(res => {

            if (!res.ok) {
                throw Error("ERROR")
            }
            return res.json()

        })

            .then(data => {
                //console.log(data)
                const html = data.genres.map(genres => {
                    return `<p>Genre Name: ${genres.name}  id:${genres.id}<p>`
                }).join('')
                //console.log(html);
                const post = document.querySelector("#movies-genre-list").insertAdjacentHTML("afterbegin", html)
            })
    }
    catch {
        (error => {
            console.log(error);
        });
    }
}

getGenre();
/*
async function getLionKing() {
    const API_KEY = ('fba9416fe2921a470b90a29ef5793f0a');
    const lionUrl = ('https://api.themoviedb.org/3/find/movie/420818-the-lion-king?api_key=fba9416fe2921a470b90a29ef5793f0a&language=en-US&external_source=imdb_id');
    

    const res = await fetch(lionUrl, {
        method: 'GET',

    }).then(res => {

        if (!res.ok) {
            throw Error("ERROR")
        }
        return res.json()

    })

        .then(data => {
           // console.log(data)
            const html = data.movie_results.map(movie_results => {
                return `<h1> Name: ${movie_results.movie_results} <h1>`
            }).join('')
            console.log(html);
            const post = document.querySelector("#favo-movie").insertAdjacentHTML("afterbegin", html)
        })
        .catch(error => {
            console.log(error);
        });

}

getLionKing();
*/

async function getTop() {
    const API_KEY = ('fba9416fe2921a470b90a29ef5793f0a');
    const popUrl = ('https://api.themoviedb.org/3/discover/movie?&language=en-US&sort_by=popularity.desc&api_key=fba9416fe2921a470b90a29ef5793f0a');


    const res = await fetch(popUrl, {
        method: 'GET',

    }).then(res => {

        if (!res.ok) {
            throw Error("ERROR")
        }
        return res.json()

    })

        .then(data => {
            //  console.log(data)
            const html = data.results.map(movie_results => {
                return `<p> Name: ${movie_results.original_title} ,Voted: ${movie_results.vote_average}<p>`
            }).join('')
            // console.log(html);
            const post = document.querySelector("#top-movie").insertAdjacentHTML("afterbegin", html)
        })
        .catch(error => {
            console.log(error);
        });

}

getTop();






async function get1975() {
    const API_KEY = ('fba9416fe2921a470b90a29ef5793f0a');
    const oldUrl = ('https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=fba9416fe2921a470b90a29ef5793f0a');


    const res = await fetch(oldUrl, {
        method: 'GET',

    }).then(res => {

        if (!res.ok) {
            throw Error("ERROR")
        }
        return res.json()

    })

        .then(data => {
            console.log(data)
            const html = data.results.map(movie_results => {
                return `<p> Name: ${movie_results.original_title}<p>`
            }).join('')
            console.log(html);
            const post = document.querySelector("#old-movie").insertAdjacentHTML("afterbegin", html)
        })
        .catch(error => {
            console.log(error);
        });

}

get1975();