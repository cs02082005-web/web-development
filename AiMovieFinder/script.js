const API_key ="a6606658";

const buttons = document.querySelectorAll("button")
// here buttons - array - because it is store multiple html button tags

const moviesContainer = document.getElementById("movies-container")

buttons.forEach(btn =>{

    btn.addEventListener("click", ()=>{

        const mood = btn.dataset.mood;

        fetchMovie(mood)


    });

});

    // task 2 to get the movies on the basis of mood value

        async function fetchMovie(movieName){

        moviesContainer.innerHTML = "<h2>Loading.....</h2>";
        const url = `http://www.omdbapi.com/?apikey=a6606658&s=${movieName}`;

        const response =  await          fetch(url)

        const data =    await           response.json()

       displayMovie(data.Search)
      
    
    }

    function displayMovie(movies){

        moviesContainer.innerHTML = "";

        movies.forEach(movie =>{

        const card = document.createElement("div")

        card.classList.add("movie-card")

        card.innerHTML =`
        <img src ="${movie.Poster}">
        
        <div class="movie-info">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        </div>
        `;

        moviesContainer.appendChild(card)
        
    })
};