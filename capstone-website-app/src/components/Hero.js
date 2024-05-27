import { Link } from 'react-router-dom';
import heroImage from '../assets/restaurantfood.jpg';

const Hero = () => {
    return (
        <article className="heroSection">
            <div className="heroGrid widthFixing">
                <div className='heroLeft'>
                    <h1 id="heroTitle">Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod condimentum ante finibus consequat. Donec Mauris accumsan tellus mi, vitae rutrum felis scelerisque at.</p>
                    <Link to="/booking"><div className='btn'>Reserve a Table</div></Link>
                </div>
                <div className='heroRight'>
                    <img src={heroImage} alt="Food from the Little Lemon restaurant" className='heroImage'></img>
                </div>
            </div>
        </article>
    );
};

export default Hero;