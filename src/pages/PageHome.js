import { useEffect, useState } from 'react';
import NavSort from '../components/NavSort';
import Movies from '../components/Movies';
import Banner from '../components/Banner';
import { API_KEY, API_TOKEN } from '../globals/globals';


function PageHome({ sort }) {

    const [movieData, setMovieData] = useState(null);
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
        const fetchBannerMovie = async() => {
            const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
            let bannerMovieData = await res.json();
            bannerMovieData = bannerMovieData.results.splice(0, 12);
            setMovieDataBanner(bannerMovieData);            
        }
        console.log(movieDataBanner)
    })

    // function fetchTrendMovie() {
    //     const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`, {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Authorization': 'Bearer '+ API_TOKEN 
    //             }

    //         });
    //         let bannerMovieData = await res.json();

    //         bannerMovieData = bannerMovieData.results[0];
    //         setMovieDataBanner(bannerMovieData);
    // }
    // fetchTrendMovie();



    return (
        <div>
            <NavSort />
            <Banner movieObj = {movieData} />
            <Movies />
        </div>
    )
}

export default PageHome;
