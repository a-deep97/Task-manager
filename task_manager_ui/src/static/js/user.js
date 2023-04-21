import '../css/common.css';
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';

/**
 * This component represents user page
 */
function User() {
    return (
        <div id="user" className="main-view">
            <Navbar />
            <MainContainer />
            <Footer />
        </div>
    );
};

export default User;
