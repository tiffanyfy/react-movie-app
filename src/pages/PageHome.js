import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import { API_TOKEN } from '../globals/globals';

function PageHome() {

    const [movieData, setMovieData] = useState(null);


    // when change occurs(like sort property), run the function in useEffect
    useEffect(() => {
        // using async since we need the data before load the page
        const fetchMovies = async() => {
            // fetch() - built in function
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ API_TOKEN 
                }
                
            });
            let rawMovieData = await res.json();

            // splice making a copy of array that returned 
            rawMovieData = rawMovieData.results.splice(0, 12);
            // save the data returned into a variable 
            setMovieData(rawMovieData);
        }
        fetchMovies();
    }, [sort]);


    return (
        <div>
            <Movies />
        </div>
    )
}

export default PageHome;
