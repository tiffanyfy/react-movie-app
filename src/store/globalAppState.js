// import React from 'react';
// import globalHook from 'use-global-hook';
// import { appStorageName } from '../globals/globals';
 

// function getFavItems(){
//     let storedFavs = localStorage.getItem(appStorageName);
//     if( storedFavs === null){
//         storedFavs = [];
//     } else {
//         storedFavs = JSON.parse(localStorage.getItem(storedFavs));
//     }
//     return storedFavs;
// }


// // save functions in an object
// const actions = {
//     addFavItem:(store, movieObj) => {
//         const newlyAddedFavs = [...store.state.favs, movieObj];
        
//         const newFavsForStorage = JSON.stringify(newlyAddedFavs);

//         localStorage.setItem(appStorageName, newFavsForStorage);

//         store.setState({ favs: newFavs });

//     },

//     removeFavItem: (store, id) => {

//         let currentFavs = store.state.favs;

//         const indexOfMovieToRemove = currentFavs.findIndex((movieObj) => kittenObj.id === id);
//         currentFavs.splice(indexOfMovieToRemove, 1);

//         let favsInStorage = JSON.stringify(currentFavs);
//         localStorage.setItem(appStorageName, favsInStorage);
//     }

// }

// const initialState = {
//     favs: getFavItems(),
// }

// const useGlobal = globalHook(React, initialState, actions);

// export default useGlobal;
