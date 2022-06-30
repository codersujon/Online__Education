import React from "react";


function CourseCard(props){
    return(
        <div className="course__box">
            <i className={props.courseIcon}></i>
            <h3 className="course__title">{props.courseTitle}</h3>
            <p className="course__text">{props.courseText}</p>
        </div>
    );
}


export default CourseCard;