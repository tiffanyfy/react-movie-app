import { useEffect, useState } from 'react';
import { API_TOKEN } from '../globals/globals';
import Movies from '../components/Movies';

function PageFavs() {
    
    // create state for favMovies array
    const savedMovies = JSON.parse(localStorage.getItem("favMovies"))

    return (
        <div>
            <h1>Fav Movies</h1>
            <Movies movieData={savedMovies} />
        </div>
    )
}

export default PageFavs;
