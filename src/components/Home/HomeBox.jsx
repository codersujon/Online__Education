import React from 'react';

function HomeBox(props) {
    return (
        <div className="home__box">
            <i className={props.icon}></i>
            <h3 className="home__box-title">{props.title}</h3>
            <p className="home__box-text">{props.text}</p>
        </div>
    );
}

export default HomeBox;