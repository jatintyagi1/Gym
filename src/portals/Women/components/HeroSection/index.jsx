//import { useState } from 'react';
import WomenBoxing from '../../../../assets/videos/woman_boxing.mp4';

export default function HeroSection() {
    //const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover);
    // }


    return (
        <div className="hero-container" id='contact'>
            <div className="hero-bg">
                <video className="video-bg" autoPlay loop muted>
                    <source src={WomenBoxing} type='video/mp4' />
                </video>
            </div>
            <div className="hero-content">
                <h1 className="hero-h1">Where health, beauty and fitness meet.</h1>
                <p className="hero-p">
                    Take advantage of our private locker rooms, showers, well-equipped
                    gym floor, saunas, eucalyptus-infused towels, and hair & makeup
                    stations.
                </p>
                {/* <div className="hero-btn-wrapper">
                    <a href="./contact" className={`button ${hover ? 'hover' : ''}`} onMouseEnter={onHover} onMouseLeave={onHover}>
                        Join Now {hover ? <span className="arrow-forward">→</span> : <span className="arrow-right">→</span>}
                    </a>
                </div> */}
            </div>
        </div>
    )
}