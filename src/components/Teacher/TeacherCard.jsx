import React from "react";

function TeacherCard(props){
    return (
        <div className="teacher__card">
            <img src={props.tImage} alt="Teacher-1" className="teacher__img"/>
            <h3 className="teacher__title">{props.tName}</h3>
            <p className="teacher__text">{props.tText}</p>
            <div className="teacher__icons">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-github"></a>
            </div>
        </div>
    );
}

export default TeacherCard;