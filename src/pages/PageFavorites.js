import useGlobal from '../store/globalAppState';


function PageFavs() {
    

    // Save favorited movies into local storage

    // Get favMovies
    let displayFavs = JSON.parse(localStorage.getItem("favMovies"))
    console.log(displayFavs)



    // const globalStateAndActions = useGlobal();
    // const globalState = globalStateAndActions[0];

    // useEffect(()=>{
    //     document.title = ``
    // })
    
    return (
        <div>
            <h1>Favorite Movies</h1>
        </div>
    )
}

export default PageFavs;
