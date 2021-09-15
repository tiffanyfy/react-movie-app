import { useState } from 'react';
import noPoster from '../images/no-movie-poster.jpg';
import addFavorite from '../images/add-favorite.png';
import thumbup from '../images/thumbup.svg';
import thumbdown from '../images/thumbdown.svg';
import mehIcon from '../images/meh.svg';
import playIcon from '../images/video.svg';

function SingleMovie({ movieObj }) {

    return (
        <div className="single-movie" style={{backgroundImage: movieObj.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}}>
            <div className="single-movie-background-image" ></div>

            {/* reference page for the path */}
            {/* https://developers.themoviedb.org/3/getting-started/images */}
            <div className="single-movie-container" >
            
                <div className="single-movie-content" >
                    {/* <div className="single-movie-poster"> */}
                        {movieObj.poster_path === null? <img src={noPoster} alt="no poster image" /> : <img src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`} alt={movieObj.title} id='single-movie-poster' />}
                    {/* </div> */}
                    <div className="single-movie-info">
                        <h2 id="single-movie-title">{movieObj.title}</h2>
                        <div className="single-movie-info-header">
                            <p id="single-movie-release-date">{movieObj.release_date}</p>
                        
                             <img src={addFavorite} alt="add favorite" id="single-movie-fav-btn"/>
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
