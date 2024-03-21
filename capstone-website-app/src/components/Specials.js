import { Link } from 'react-router-dom';
import special1 from '../assets/greek_salad.jpg';
import special2 from '../assets/bruchetta.svg';
import special3 from '../assets/lemon_dessert.jpg';

const Specials = () => {
    return (
        <article className="specialsSection">
            <div className="specialsGrid widthFixing">
                <h1 id='specialsTitle'>This Weeks Specials</h1>
                <Link to="/dumby-page" className='specialsBtn'><div className='btn specialsBtn'>Online Menu</div></Link>
                <div className='specialBox' id='special1'>
                    <img src={special1} alt="Special of the week #1" className='specialImage'></img>
                    <div className='specialText markazi'>
                        <h2>Greek Salad</h2>
                        <h2 className='specialPrice'>$12.99</h2>
                        <p>This is a description of a food item. This is a description of a food item. This is a description of a food item.</p>
                        <h2>Order a delivery</h2>
                    </div>
                </div>
                <div className='specialBox' id='special2'>
                    <img src={special2} alt="Special of the week #2" className='specialImage'></img>
                    <div className='specialText markazi'>
                        <h2>Bruchetta</h2>
                        <h2 className='specialPrice'>$5.99</h2>
                        <p>This is a description of a food item. This is a description of a food item. This is a description of a food item.</p>
                        <h2>Order a delivery</h2>
                    </div>
                </div>
                <div className='specialBox' id='special3'>
                    <img src={special3} alt="Special of the week #3" className='specialImage'></img>
                    <div className='specialText markazi'>
                        <h2>Lemon Dessert</h2>
                        <h2 className='specialPrice'>$5.00</h2>
                        <p>This is a description of a food item. This is a description of a food item. This is a description of a food item.</p>
                        <h2>Order a delivery</h2>
                    </div>
                </div>
            </div>
        </article>
    );
};


export default Specials;