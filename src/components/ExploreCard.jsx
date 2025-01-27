import "./explorecard.css"
import {Link} from "react-router-dom";
import aipanArt from '../assets/images/aipanart.webp';
import Linguistic from '../assets/images/Linguistic.webp';
import Food1 from '../assets/images/foodUk.webp';
import Temple from '../assets/images/Temple.webp';
import Dance from '../assets/images/dress.webp';
import Dress from '../assets/images/dressArt.webp';
import Dhol from '../assets/images/Dhol.webp';
import Architecture from '../assets/images/Architecture.webp';
import {useEffect} from "react";
function ExploreCard() {
    function showAlert() {
        alert("We are currently working on it. You can come back after a few days to check.\nCurrently, only the Language card is live, you can check it out. \n\nThank you for your patience! ❤️");
    }

    useEffect(() => {
        function isSafari() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }

        if (isSafari()) {
            const carouselWrapper = document.getElementById('explore-card');
            if (carouselWrapper) {
                carouselWrapper.classList.remove('explore-card-animation');
            }
        }
    }, []);

    return (
        <section className="explore-section">
            <h1 className="explore-uttarakhand">Explore Uttarakhand</h1>
            <div className="explore-card-list">
                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/language"} className="explore-card-link" >
                        <div className="explore-card-image-container">
                            <img src={Linguistic} alt="Linguistic Survey of India Book Image"
                                 className="explore-card-image" loading="lazy" decoding="async" />
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Language</p>
                        </div>
                    </Link>
                </div>
                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"/food"} className="explore-card-link" >
                        <div className="explore-card-image-container">
                            <img src={Food1} alt="Food Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Food</p>
                        </div>
                    </Link>
                </div>
                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"#"} className="explore-card-link" onClick={showAlert}>
                        <div className="explore-card-image-container">
                            <img src={Temple} alt="Temple Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Temples</p>
                        </div>
                    </Link>
                </div>
                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"#"} className="explore-card-link" onClick={showAlert}>
                        <div className="explore-card-image-container">
                            <img src={Dress} alt="Dress Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Traditional Dresses</p>
                        </div>
                    </Link>
                </div>
                <div  id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"#"} className="explore-card-link" onClick={showAlert}>
                        <div className="explore-card-image-container">
                            <img src={aipanArt} alt="Aipan Image"
                                 className="explore-card-image" loading="lazy"  decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Art</p>
                        </div>
                    </Link>
                </div>
                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"#"} className="explore-card-link" onClick={showAlert}>
                        <div className="explore-card-image-container">
                            <img src={Dance} alt="Dance Image"
                                 className="explore-card-image" loading="lazy" decoding="async" />
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Dance</p>
                        </div>
                    </Link>
                </div>
                <div  id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"#"} className="explore-card-link" onClick={showAlert}>
                        <div className="explore-card-image-container">
                            <img src={Dhol} alt="Dhol Image"
                                 className="explore-card-image" loading="lazy" decoding="async"   />
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Music</p>
                        </div>
                    </Link>
                </div>
                <div id="explore-card" className="explore-card explore-card-animation">
                    <Link to={"#"} className="explore-card-link" onClick={showAlert}>
                        <div className="explore-card-image-container">
                            <img src={Architecture} alt="Dhol Image"
                                 className="explore-card-image" loading="lazy" decoding="async"/>
                        </div>
                        <div className="explore-card-text-container">
                            <p className="explore-card-text">Architecture</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
export default ExploreCard;