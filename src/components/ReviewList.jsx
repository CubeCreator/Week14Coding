import React from "react";
import "./ReviewList.css"
import Review from "./Review";
export const ReviewList = ({Reviews, starRating, reviewName, reviewText}) => {

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
                {/* Do this if the there is stuff in the Reviews Array */}
                {Reviews.length > 0 ? Reviews.map((Reviews, index) => (
                    <tbody key={index}>
                        <Review
                            reviews = {Reviews}
                            starRating = {starRating}
                            reviewName = {reviewName}
                            reviewText = {reviewText}
                        />
                    </tbody>
                )): <tbody/> }
            </table>
        </div>
    )
}

export default ReviewList;