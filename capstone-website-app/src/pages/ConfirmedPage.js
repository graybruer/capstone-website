import React from "react";
import { Link } from 'react-router-dom';


const ConfirmedPage = () => {
    return (
        <div className="dumbyPage">
            <div id='dumbyTitle'><h1>Reservation Successful</h1></div>
            <div id="dumbyContent">
                <h2>Your reservation has been placed</h2><br/>
                <p>Please return to the</p>
                <Link to="/" className="btn">Homepage</Link>
            </div>
        </div>
    );
};

export default ConfirmedPage;