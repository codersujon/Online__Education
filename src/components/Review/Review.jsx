import React from 'react';
import ReviewCard from './ReviewCard';
import studentReviewInfo from '../../sReviewInfo';


function Review(props) {
    return (
        <section className="review" id="review">
        <h1 className="section__heading">students review</h1>
        <h3 className="section__title">what our students says about us</h3>

        <div className="review__container">
            {/* MAP LOOPING WITH ARROW FUNCTION */}
            {studentReviewInfo.map(review => 
            <ReviewCard reviewImg ={review.reviewImg} reviewTitle = {review.reviewTitle} reviewText = {review.reviewText} />)}
        </div>
    </section>
    );
}

export default Review;