import {NavLink} from 'react-router-dom';
import { useState } from 'react';

function NavMain() {

    // const [toggle, setToggle] = useState(false);

    // function toggleFunction(){
    //     setToggle(true);
    // }
    
    

    // hamburger.on('click', function functionname() {
    //     setToggle('true')
    // } )

    return (
        <nav className="site-navigation" id="site-navigation">

            <button class="menu-toggle" aria-controls="header-menu" aria-expanded="false" >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"></path>
                </svg>
            </button>

            <ul class="nav-menu" id="header-menu">
                <li>
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">Favorites</NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default NavMain;
