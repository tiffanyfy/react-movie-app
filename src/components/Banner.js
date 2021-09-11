import noPoster from '../images/no-movie-poster.jpg';

function Banner( movieObj ) {
    return (
        <div className="banner-container">
            {/* <img src={ noPoster } alt="placeholder" /> */}
            <div className="banner-container" style={{backgroundImage: movieObj.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}}>
                <h2 class="banner-title">{movieObj.title}</h2>
                <p class="banner-overview">{movieObj.overview}</p>



                {/* path to the movie page (use movie id) */}

                <a href="`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}">Watch Now</a>

            </div>

            
        </div>
    )
}

export default Banner;
