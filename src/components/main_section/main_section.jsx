import React from "react";
import { useNavigate } from 'react-router-dom';
import image1 from "../../assets/main_section_1.png"
import './main_section.styles.scss';

const MainSection = () => {
    const navigate = useNavigate();

    return (
        <div className="main-section-container">
            <div className="main-section-middle">
                <div className="ms-m-image">
                    <img src={image1} alt='Dome Jewlery'/>
                </div>
                <div className="ms-m-description">
                    <h2>A Reflection of Beauty </h2>
                    <p>
                    Inspired from the rich heritage of the region’s architecture, specifically the diverse and intricately designed ‘domes’ of the mosques and royal palaces in the Middle East and their majestic beauty.
                    </p>
                    <button className="button is-black" id='shop-now' onClick={() => navigate('/product/1')}>
                        Shop the Collection
                    </button>
                </div>
            </div>

        </div>
    )
}

export default MainSection;