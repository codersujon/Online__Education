import React from 'react';
import HomeBox from './HomeBox';
import homeDetails from "../../homeDetails";



function Home(props) {
    return (
        <section className="home" id="home">
        <div className="home__content">
            <h1 className="home__title">learn online from home</h1>
            <p className="home__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aut qui magni unde quo
                odio iste officiis, accusamus accusantium ut?</p>
            <a href=""><button className="home__btn">discover more</button></a>
        </div>
        <div className="home__container">
            {/* Arrow Function Calling */}
            {homeDetails.map( box => <HomeBox icon={box.icon} title={box.title} text={box.text}/>)}
        </div>
    </section>
    );
}

export default Home;