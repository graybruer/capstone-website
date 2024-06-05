// import ReviewBox from "./ReviewBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";
import avatar1 from '../assets/thispersondoesnotexist.jpg';
import avatar2 from '../assets/thispersondoesnotexist1.jpg';
import avatar3 from '../assets/thispersondoesnotexist2.jpg';
import avatar4 from '../assets/thispersondoesnotexist3.jpg';

const CustomersSay = () => {
    return (
        <article className="reviewSection">
            <h1 id="reviewTitle">Testimonials</h1>
            <div className="reviewGrid widthFixing">
                {/* I don't know why this is breaking everything and it's not even throwing an error to point a finger at anything.
                    I'm fed up with it for the moment so I'm just going to do it the more static way and revisit this later */}
                {/*
                <ReviewBox
                    reviewText="This is a review. It says good things. Will come again."
                />
                <ReviewBox
                    reviewText="This review compliments the food and decor. Emphasis on atmosphere."
                />
                <ReviewBox
                    reviewText="It's remarkable how many typos I make without spellcheck to save me."
                />
                <ReviewBox
                    reviewText="I should look into getting some sort of spellcheck in vscode."
                />
                */}


                <div className="reviewBox" id="review1">
                    <div className="rating">
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                    </div>
                    <div className="reviewText"><p>This is a review. It says good things. Will come again.</p></div>
                    <div className="reviewBy">
                        <img src={avatar1} alt="User Avatar" className="reviewAvatar"></img>
                        Helen G. Lee
                    </div>
                </div>
                <div className="reviewBox" id="review2">
                    <div className="rating">
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                    </div>
                    <div className="reviewText"><p>This review compliments the food and decor. Emphasis on atmosphere.</p></div>
                    <div className="reviewBy">
                        <img src={avatar2} alt="User Avatar" className="reviewAvatar"></img>
                        Josephine J. Moore
                    </div>
                </div>
                <div className="reviewBox" id="review3">
                    <div className="rating"></div>
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                    <div className="reviewText"><p>It's remarkable how many typos I make without spellcheck to save me.</p></div>
                    <div className="reviewBy">
                        <img src={avatar3} alt="User Avatar" className="reviewAvatar"></img>
                        Kevin D. Frank
                    </div>
                </div>
                <div className="reviewBox" id="review4">
                    <div className="rating">
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                        <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#F4CE14",}} />
                    </div>
                    <div className="reviewText"><p>I should look into getting some sort of spellcheck in vscode.</p></div>
                    <div className="reviewBy">
                        <img src={avatar4} alt="User Avatar" className="reviewAvatar"></img>
                        Matthew C. Deleon
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CustomersSay;