import noPoster from '../images/no-movie-poster.jpg';
import { useEffect, useState } from "react";

function Banner( { movieObj, movieBannerLength } ) {

    const [bannerData, setBannerData] = useState(null);
    
    useEffect(() => {
        setBannerData(movieObj);
    }, [movieObj]);


    let randomNum = Math.floor(Math.random() * movieBannerLength);

    let movieDisplayed = movieObj && movieObj[randomNum];


    return (
        // <div></div>
        <div className="banner-container">
            <img src={`https://image.tmdb.org/t/p/original/${movieDisplayed && movieDisplayed.backdrop_path}`} alt="placeholder" />
            <div className="banner-container" >
                <h2 class="banner-title">{ movieDisplayed && movieDisplayed.title}</h2>
                <h3 class="banner-release-date">{ movieDisplayed && movieDisplayed.release_date}</h3>
                <p class="banner-overview">{ movieDisplayed && movieDisplayed.overview}</p>

                {/* path to the movie page (use movie id) */}
                <a href="">Watch Now</a>

            </div>

            
        </div>
    )
}

export default Banner;
// function Banner({ movieObj }) {
//     let randomNum = Math.floor(Math.random() * movieObj && movieObj.length);

//     let movieDisplayed = movieObj && movieObj[randomNum];


//     return (
//         <div className="banner-container">
//             <img src={`https://image.tmdb.org/t/p/original/${movieDisplayed && movieDisplayed.backdrop_path}`} alt="placeholder" />
//             <div className="banner-container" >
//                 <h2 class="banner-title">{movieDisplayed && movieDisplayed.title}</h2>
//                 <h3 class="banner-release-date">{movieDisplayed && movieDisplayed.release_date}</h3>
//                 <p class="banner-overview">{movieDisplayed && movieDisplayed.overview}</p>


//                 <a href="">Watch Now</a>

//             </div>

            
//         </div>
//     )
// }

// export default Banner;

