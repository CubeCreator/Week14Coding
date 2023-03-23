import React from "react";
import { Stars } from './Stars.jsx';
import Review from "./Review.jsx";
import ReviewList from "./ReviewList.jsx";
export const ReviewForm = () => {

    return (
        <div>
            <h3>Rate:</h3>
            <Stars/>
            <Review/>
            <ReviewList/>
        </div>
    )
}

export default ReviewForm;