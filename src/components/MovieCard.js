import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import addFavorite from '../images/add-favorite.png';
import removeFavorite from '../images/remove-favorite.png';
import {NavLink} from 'react-router-dom';
import { favMovies } from '../globals/globals';


function MovieCard({ movieObj }) {
    
    function addFav() {

        if (favMovies.includes(movieObj.id)) {
            let position = favMovies.indexOf(movieObj.id)
            favMovies.splice(position, 1)
            localStorage.setItem("favMovies", JSON.stringify(favMovies))
        } else {
            favMovies.push(movieObj.id);
            localStorage.setItem("favMovies", JSON.stringify(favMovies))
        }
        
        // if (localStorage.getItem("favMovies") !== null) {
        //     let favMovies = []
        // } else {

        //     if (favMovies.includes(movieObj.id)) {
        //         let pos = favMovies.indexOf(movieObj.id)
        //         favMovies.splice(pos, 1)
        //         localStorage.setItem("favMovies", JSON.stringify(favMovies))
        //     }
        //     // Pull existing array (favorite movies) from localStorage
        //     // bc local storage only stores strings
        //     let stringData = localStorage.getItem("favMovies")
        //     // Parse converts strings into og data type -> taking string and converting into an array
        //     let favMovies = JSON.parse(stringData)
        // }
        // // TO DO:
        // // If id already exists, remove from array

        
        // // Add movie to array
        // favMovies.push(movieObj.id)
        // // Save to localStorage
        // // Stringify converts array into string
        // // SetItem to save
        // localStorage.setItem("favMovies", JSON.stringify(favMovies))

        
    }

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
                <p>Rating: {movieObj.vote_average}</p>
                <Link to={`/movie/${movieObj.id}`}>More Info</Link>
                {/* Will need to modify code below to add/remove favs */}
                {/* Event handler to add fav when clicked - go to addFav function */}
                <div className="add-favorite" onClick={addFav}>
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

