import chefs1 from '../assets/Mario_and_Adrian_A.jpg';
import chefs2 from '../assets/Mario_and_Adrian_B.jpg';

const Chicago = () => {
    return (
        <article className="chicagoSection">
            <div className="chicagoGrid widthFixing">
                <h1 id="chicagoTitle">Little Lemon</h1>
                <h2 id="chicagoSubTitle">Chicago</h2>
                <p className="chicagoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod condimentum ante finibus consequat. Donec vitae nisl mollis, vehicula sem ut, imperdiet tellus. Duis magna tellus, ultrices quis molestie nec, ullamcorper in urna. Mauris accumsan tellus mi, vitae rutrum felis scelerisque at.</p>
                <p className="chicagoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod condimentum ante finibus consequat. Donec vitae nisl mollis, vehicula sem ut, imperdiet tellus. Duis magna tellus, ultrices quis molestie nec, ullamcorper in urna. Mauris accumsan tellus mi, vitae rutrum felis scelerisque at.</p>
                <img src={chefs1} alt="Mario and Adrian" className='chefPhoto' id='chef1'></img>
                <img src={chefs2} alt="Mario and Adrian" className='chefPhoto' id='chef2'></img>
            </div>
        </article>
    );
};

export default Chicago;