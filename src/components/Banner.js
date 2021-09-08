function Banner( movieObj ) {
    return (
        <div className="banner">
            <div className="banner-container" style={{backgroundImage: movieObj.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`}}>
            </div>
            
        </div>
    )
}

export default Banner;
