import React, { useState } from "react";

export const Review = ({reviews, starRating, reviewName, reviewText}) => {
    
    //Code for the Review Text
    
    return (
        <div>
            <tbody>
                <tr>{reviews.starRating}</tr>
                <tr>{reviews.reviewName}</tr>
                <tr>{reviews.reviewText}</tr>
            </tbody>
        </div>
    )
    
}

export default Review;