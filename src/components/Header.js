import {Link} from 'react-router-dom';
import NavMain from './NavMain';

function Header() {
    return (
        <header className="site-header">
            <h1><Link to="/">Movie Club</Link></h1>
            <NavMain />
        </header>
    )
}

export default Header;
