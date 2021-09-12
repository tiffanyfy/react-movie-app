import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import addFavorite from '../images/add-favorite.svg';

function MovieCard({ movieObj }) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {/* If no poster, then render the no poster image */}
                {/* If there is a movie poster, then output using movie id (url parameter) */}
                {movieObj.poster_path === null ?
                    <img src={noPoster} alt="No poster" /> :
                    <img src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} alt={movieObj.title} />
                }
            </div>
            <div className="movie-info">
                <h3>{movieObj.title}</h3>
                <p>{movieObj.release_date}</p>
                <p>{movieObj.popularity}</p>
                <p>{movieObj.overview}</p>
                <Link to={`/movie/${movieObj.id}`}>More Info</Link>
                <div className="favorite-icon">
                    {/* Placeholder code, will need to modify to add/remove favs */}
                    <img src={addFavorite} alt="Add movie to favorites" />
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
