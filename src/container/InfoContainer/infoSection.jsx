import React from 'react';
import Button from './button';
import Image from '../../assets/Images/fitness_5.png'

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <section className={lightBg ? 'info-section lightBg' : 'info-section'} id={id}>
            <div className="info-wrapper">
                <div className={imgStart ? 'info-row imgStart' : 'info-row'}>
                    <div className="column1">
                        <div className="text-wrapper">
                            <p className="top-line">{topLine}</p>
                            <h1 className={lightText ? 'heading lightText' : 'heading'}>{headline}</h1>
                            <p className={darkText ? 'subtitle darkText' : 'subtitle'}>{description}</p>
                            <div className="btn-wrap">
                                <Button
                                    to="/contact"
                                    primary={primary}
                                    dark={dark}
                                    dark2={dark2}
                                >
                                    {buttonLabel}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="column2">
                        <div className="img-wrap">
                            <img src={Image} alt={alt} className="info-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
