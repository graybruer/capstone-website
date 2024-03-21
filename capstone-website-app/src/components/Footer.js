import logo from '../assets/Logo_Footer.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footerContent widthFixing'>
                <img src={logo} alt="Little Lemon Restaurant" id='footerLogo'></img>

                <ul>
                    <h3>Site Navigation:</h3>
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
            </div>
        </footer>
    );
};

export default Footer;