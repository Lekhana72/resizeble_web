const searchForm = document.querySelector('form');
const movieContainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('.inputBox');

const getMoveInfo = async(movie)=>{
    const myApiKey = "*******";
    const url = ` `;
    const response = await fetch(url);
    const data = await response.json();

    showMovieData(data);

}

const showMovieData = (data)=>{
    // use Destructing assignment to extract  properties from dta object
    const {Title, imdbRating,Genre, Released, Runtime,Actors,Plot,Poster}=data;

    const movieElement = document.createElement('div');
    movieElement.innerHTML = `<h2>${Title}</h2>
                                <p><strong>Rating: &#11088;</strong>${imdbRating}</p>`;
    const movieGenreElement = document.createElement('div');
    movieGenreElement.classList.add('movie-genre');

    Genre.split(",").forEach(element=>{
        const p = document.createElement('p');
        p.innerText = element;
        movieGenreElement.appendChild(p);

    });

    movieElement.append

    movieContainer.appendChild(movieElement);
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const movieName = inputBox.ariaValueMax.trim();
    if(movieName !== ''){
        getMoveInfo(movieName);

    }
})


