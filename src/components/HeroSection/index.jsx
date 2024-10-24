import React, { useState } from 'react';
import Video from '../../assets/videos/video.mp4';
import '../../styles/HeroSection.css';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <div className="hero-container" id='contact'>
            <div className="hero-bg">
                <video className="video-bg" autoPlay loop muted>
                    <source src={Video} type='video/mp4' />
                </video>
            </div>
            <div className="hero-content">
                <h1 className="hero-h1">The future to build your best version</h1>
                <p className="hero-p">
                    Connecting your body with technology and science for results in record time
                </p>
                <div className="hero-btn-wrapper">
                    <a href="./contact" className={`button ${hover ? 'hover' : ''}`} onMouseEnter={onHover} onMouseLeave={onHover}>
                        Join Now {hover ? <span className="arrow-forward">→</span> : <span className="arrow-right">→</span>}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
