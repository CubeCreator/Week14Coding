import React from "react";
import "./ReviewList.css"
export const ReviewList = (Reviews) => {

    return (
        <div>
            <h3>Reviews</h3>
            <table>
                <thead>
                    <tr>
                        <th>Rating:</th>
                        <th>Name:</th>
                        <th>Review:</th>
                    </tr>
                </thead>
                {Reviews.map((reviews, index) => (
                    <tbody key={index}>
                        <tr>{reviews.starRating}</tr>
                        <tr>{reviews.reviewName}</tr>
                        <tr>{reviews.reviewText}</tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default ReviewList;