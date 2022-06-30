import React from "react";


function ReviewCard(props){
    return(
        <div className="review__box">
            <img src={props.reviewImg} alt="" className="review__img"/>
            <h3 className="review__title">{props.reviewTitle}</h3>
            <p className="review__text">{props.reviewText}</p>
            <div className="review__stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
        </div>
    );
}


export default ReviewCard;