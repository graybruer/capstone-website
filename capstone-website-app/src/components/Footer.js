import logo from '../assets/Logo.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="Little Lemon Restaurant"></img>

            <ul>
                <h3>Doormat Navigation:</h3>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Online Orders</li>
                <li>Login</li>
            </ul>

            <ul>
                <h3>Contact:</h3>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>

            <ul>
                <h3>Social Media Links:</h3>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

        </footer>
    );
};

export default Footer;