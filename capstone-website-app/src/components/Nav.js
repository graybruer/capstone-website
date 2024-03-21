import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="navlist">
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/dumby-page">About</Link></li>
                <li><Link to="/dumby-page">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/dumby-page">Order Online</Link></li>
                <li><Link to="/dumby-page">Login</Link></li>
            </ul>
        </nav>
    );
};


export default Nav;