import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import addFavorite from '../images/add-favorite.png';
import removeFavorite from '../images/remove-favorite.png';
import {NavLink} from 'react-router-dom';


function MovieCard({ movieObj }) {

    function goSinglePage() {
        // 1. Redirect to movie singles page
        // 2. Pass movieObj to that page through props
        console.log(`You clicked: ${movieObj.title}`);
        // <SingleMovie />
        // <NavLink to={`/movie/:${movieObj.id}`}></NavLink>
        <NavLink to="/about">About</NavLink>


    }

    return (
        <div className="movie-card" onClick={goSinglePage}>
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
                <p>Rating: {movieObj.vote_average}</p>
                <Link to={`/movie/${movieObj.id}`}>More Info</Link>
                {/* Will need to modify code below to add/remove favs */}
                <div className="add-favorite">
                    <img src={addFavorite} alt="Add heart icon" />
                </div>
                <div className="remove-favorite">
                    <img src={removeFavorite} alt="Heart icon" />
                </div>
            </div>
        </div>
    )
}

export default MovieCard;

