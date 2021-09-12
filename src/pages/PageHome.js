import { useEffect, useState } from 'react';
import NavSort from '../components/NavSort';
import Movies from '../components/Movies';
import Banner from '../components/Banner';
import { API_KEY, API_TOKEN } from '../globals/globals';


function PageHome({ sort }) {

    const [movieData, setMovieData] = useState(null);

    // variable for Banner
    const [movieDataBanner, setMovieDataBanner] = useState(null);


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


    // Banner
    useEffect(() => {

        const fetchPopulrMovies = async() => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

            let popularMovieData = await res.json();

            popularMovieData = popularMovieData.results.splice(0, 10);

            // console.log(popularMovieData)

            setMovieDataBanner(popularMovieData);
            
            console.log(movieDataBanner);
        }
        fetchPopulrMovies();
    },[])
    // if , [] is added, run this only once but run infinitely without ,[]
    // sometimes it movieDataBanner returns null but sometimes array... why?






    return (
        <div>
            <NavSort />
            <Banner movieObj = {movieDataBanner} />
            {movieData !== null && <Movies movieData={movieData} />}
        </div>
    )
}

export default PageHome;
