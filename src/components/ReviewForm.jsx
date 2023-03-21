import React from "react";
import { Stars } from './Stars.jsx';
import Review from "./Review.jsx";
import ReviewList from "./ReviewList.jsx";
export const ReviewForm = () => {

    return (
        <form>
            <h3>Rate:</h3>
            <Stars/>
            <Review/>
            <ReviewList/>
        </form>
    )
}

export default ReviewForm;