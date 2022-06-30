import React from 'react';

function About(props) {
    return (
        <section className="about" id="about">
        <h1 className="section__heading">about us</h1>
        <h3 className="section__title">start your journey with us</h3>

        <div className="row">
            <div className="about__content">
                <h3 className="about__content-title">start your journey to a better life with our practical life</h3>
                <p className="about__content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
                    inventore ipsam quos odio alias excepturi aliquid ducimus iste, at doloremque asperiores hic
                    laboriosam labore placeat beatae natus, sit facere non.</p>
                <a href="#"><button className="about__content-btn">learn more</button></a>
            </div>
            <div className="about__image">
                <img src="img/about-img.svg" alt="about-img"/>
            </div>
        </div>

    </section>
    );
}

export default About;