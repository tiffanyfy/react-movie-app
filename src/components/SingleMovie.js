import { useState } from 'react';
import noPoster from '../images/no-movie-poster.jpg';
import addFavorite from '../images/add-favorite.png';
import removeFavorite from '../images/remove-favorite.png'
import thumbup from '../images/thumbup.svg';
import thumbdown from '../images/thumbdown.svg';
import mehIcon from '../images/meh.svg';
import playIcon from '../images/video.svg';
import { favMovies } from '../globals/globals';


function SingleMovie({ movieObj }) {
    const [fav, setFav] = useState(false)
    
    function addFav() {

        if (favMovies.includes(movieObj.id)) {
            let position = favMovies.indexOf(movieObj)
            favMovies.splice(position, 1)
            localStorage.setItem("favMovies", JSON.stringify(favMovies))
        } else {
            favMovies.push(movieObj);
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
        if (favMovies.includes(movieObj)) {
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




    return (
        <div className="single-movie" style={{backgroundImage: movieObj.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}}>
            <div className="single-movie-background-image" ></div>

            {/* reference page for the path */}
            {/* https://developers.themoviedb.org/3/getting-started/images */}
            <div className="single-movie-container" >
            
                <div className="single-movie-content" >
                    {/* <div className="single-movie-poster"> */}
                        {movieObj.poster_path === null? <img src={noPoster} alt="no poster image" id="single-movie-poster"/> : <img src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} alt={movieObj.title} id='single-movie-poster' />}
                    {/* </div> */}
                    <div className="single-movie-info">
                        <h2 id="single-movie-title">{movieObj.title}</h2>
                        <div className="single-movie-info-header">
                            <p id="single-movie-release-date">{movieObj.release_date}</p>
                        
                             {/* <img src={addFavorite} alt="add favorite" id="single-movie-fav-btn"/>
                             <div className="add-favorite" id="single-movie-fav-btn" onClick={addFav}> */}
                             {/* <div className="single-movie-favorite-btn">
                                <img src={addFavorite} alt="Add heart icon"
                                 />
                                 <img src={removeFavorite} alt="Remove Heart icon" id="single-movie-remove-favorite"/>
                             </div> */}
                             <div>{heartIcon()}</div>
                                
                            {/* </div> */}
                            
                        </div>
                        
                        <div className="single-movie-rating">
                            <img src={movieObj.vote_average>5.0? thumbup : thumbdown} alt="rate Icon" id="single-movie-rate-icon" />
                            <span >{(movieObj.vote_average)*10}%</span>
                        </div>
                        <p id="single-movie-overview">{movieObj.overview}</p>
                        <div className="single-movie-watch-now-btn-container">
                            <a href={`/movie/${movieObj.id}`} id="single-movie-watch-now-btn">Watch Now
                        {/* <img src={playIcon} alt="play" id="play-icon" /> */}
                        </a>

                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie;
