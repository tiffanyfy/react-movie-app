import noPoster from '../images/no-movie-poster.jpg';
import addFavorite from '../images/add-favorite.png';

function SingleMovie({ movieObj }) {


    return (
        <div className="single-movie" style={{backgroundImage: movieObj.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}}>

            {/* reference page for the path */}
            {/* https://developers.themoviedb.org/3/getting-started/images */}
            <div className="single-movie-container" >
            
                <div className="single-movie-content" >
                    <div className="single-movie-poster">
                        {movieObj.poster_path === null? <img src={noPoster} alt="no poster image" /> : <img src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} alt={movieObj.title} />}
                    </div>
                    <div className="single-movie-info">
                        <h2 id="single-movie-title">{movieObj.title}</h2>
                        <div className="single-movie-info-header">
                            <p id="single-movie-release-date">{movieObj.release_date}</p>
                        
                             <img src={addFavorite} alt="add favorite" />
                        </div>
                        
                        <p id="single-movie-overview">{movieObj.overview}</p>
                        <a href="" id="single-movie-watch-now-btn">Watch Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie;
