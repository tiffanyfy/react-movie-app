import noPoster from '../images/no-movie-poster.jpg';

function Banner( movieObj ) {
    // console.log(movieObj.movieObj[0]);


    let randomNum = Math.floor(Math.random() * movieObj.movieObj.length);

    let movieDisplayed = movieObj.movieObj[randomNum];




    return (
        <div className="banner-container">
            <img src={`https://image.tmdb.org/t/p/original/${movieDisplayed.backdrop_path}`} alt="placeholder" />
            <div className="banner-container" >
                <h2 class="banner-title">{movieDisplayed.title}</h2>
                <h3 class="banner-release-date">{movieDisplayed.release_date}</h3>
                <p class="banner-overview">{movieDisplayed.overview}</p>

                {/* path to the movie page (use movie id) */}
                <a href={`https://api.themoviedb.org/3/movie/${movieDisplayed.id}?&language=en-US&page=1`}>Watch Now</a>

            </div>

            
        </div>
    )
}

export default Banner;
