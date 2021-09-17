import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import addFavorite from '../images/add-favorite.png';
import removeFavorite from '../images/remove-favorite.png';
import { NavLink } from 'react-router-dom';
import { favMovies } from '../globals/globals';
import thumbup from '../images/thumbup.svg';
import thumbdown from '../images/thumbdown.svg';


function MovieCard({ movieObj }) {

    const [fav, setFav] = useState(false)
    
    function addFav() {

        if (favMovies.includes(movieObj.id)) {
            let position = favMovies.indexOf(movieObj.id)
            favMovies.splice(position, 1)
            localStorage.setItem("favMovies", JSON.stringify(favMovies))
        } else {
            favMovies.push(movieObj.id);
            localStorage.setItem("favMovies", JSON.stringify(favMovies))
        }

        setFav(JSON.parse(localStorage.getItem("favMovies")))
        console.log(JSON.parse(localStorage.getItem("favMovies")))
        
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

    const heartIcon = () => {
        if (favMovies.includes(movieObj.id)) {
            console.log("faved")
            return (
                <div className="remove-favorite" onClick={addFav}>
                    <img src={removeFavorite} alt="Unfavorite icon" />
                </div>
            )
        } else {
            console.log("unfaved")
            return (
                <div className="add-favorite" onClick={addFav}>
                    <img src={addFavorite} alt="Favorite icon" />
                </div>
            )
        }
    }

{/* <div className="add-favorite" onClick={addFav}>
    <img src={addFavorite} alt="Favorite icon" />
</div>
<div className="remove-favorite">
    <img src={removeFavorite} alt="Unfavorite icon" />
</div> */}

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
                <p>Release Date: {movieObj.release_date}</p>
                {/* <p>Rating: {movieObj.vote_average}</p> */}
                <div className="movie-rating">
                            <img src={movieObj.vote_average>5.0? thumbup : thumbdown} alt="rate Icon" id="movie-rating-icon" />
                            <span >{(movieObj.vote_average)*10}%</span>
                        </div>
                <p className="overview">{movieObj.overview}</p>
                <Link to={`/movie/${movieObj.id}`}>More Info</Link>
                <div>{heartIcon()}</div>
                
            </div>
        </div>
    )
}

export default MovieCard;

