import { useEffect, useState } from 'react';
import { API_TOKEN } from '../globals/globals';
import Movies from '../components/Movies';



function PageFavs() {
    
    let displayFavs = JSON.parse(localStorage.getItem("favMovies")) // get localStorage fav movies array
    const [favMovies, setFavMovies] = useState(displayFavs)         // create state for favMovies array
    const [movieObjArr, setMovieObjArr] = useState([])

    // Build array of movie objects from localStorage ids using fetch
    useEffect(() => {

        displayFavs.map(async (id) => {
            let movieList = displayFavs;
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ API_TOKEN 
                }
                
            });
            let rawMovieData = await res.json();
            movieList.push(rawMovieData)
            console.log(movieList)

            setMovieObjArr(movieList)

        })

    }, [favMovies])
    // const globalStateAndActions = useGlobal();
    // const globalState = globalStateAndActions[0];

    // useEffect(()=>{
    //     document.title = ``
    // })
    
    return (
        <div>
            <h1>Fav Movies</h1>
            <Movies movieData={movieObjArr} />
        </div>
    )
}

export default PageFavs;
