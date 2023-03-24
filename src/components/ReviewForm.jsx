import React from "react";
import Review from "./Review.jsx";
import ReviewList from "./ReviewList.jsx";
import Stars from "./Stars.jsx";
export const ReviewForm = ({Reviews}) => {

    return (
        <div>
            <Stars/>
            <h3>Rate:</h3>
            <Review
                Reviews = {Reviews}
            />
            <ReviewList
                Reviews = {Reviews}
            />
        </div>
    )
}

export default ReviewForm;