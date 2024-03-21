import { Route,Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage.js';
import BookingPage from '../pages/BookingPage.js';
import DumbyPage from '../pages/DumbyPage.js';

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/booking" element={<BookingPage/>} />
                <Route path="/dumby-page" element={<DumbyPage/>} />
            </Routes>
        </main>
    );
};

export default Main;