import noPoster from '../images/no-movie-poster.jpg';

function SingleMovie({ movieObj }) {
    return (
        <div className="single-movie" style={{backgroundImage: movieObj.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}}>

            {/* reference page for the path */}
            {/* https://developers.themoviedb.org/3/getting-started/images */}
            <div className="single-movie-container">
            
                <div className="single-movie-content">
                    <div className="single-movie-poster">
                        {movieObj.poster_path === null? <img src={noPoster} alt="no poster image" /> : <img src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} alt={movieObj.title} />}
                    </div>
                    <div className="single-movie-info">
                        <h2>{movieObj.title}</h2>
                        <p>{movieObj.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie;
