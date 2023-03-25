import React from "react";
import "./ReviewList.css"
import Review from "./Review";
export const ReviewList = ({Reviews}) => {

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
                {Reviews.length > 0 ? Reviews.map((reviews, index) => (
                    <tbody key={index}>
                        <Review
                            reviews = {reviews}
                            starRating = {Reviews.starRating}
                            reviewName = {Reviews.reviewName}
                            reviewText = {Reviews.reviewText}
                        />
                    </tbody>
                )): <br/> }
            </table>
        </div>
    )
}

export default ReviewList;