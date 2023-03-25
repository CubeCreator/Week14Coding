import React from "react";
import ReviewList from "./ReviewList.jsx";
import Stars from "./Stars.jsx";
export const ReviewForm = ({Reviews}) => {

    console.log(Reviews)
    let starRating = document.getElementById("star-value").value;
    let reviewName = document.getElementById("name-text").value;
    let reviewText = document.getElementById("review-text").value;

    return (
        <form>
            <h3>Rate:</h3>
            <Stars onChange={setCurrentStars} id="star-value"/>
            <label>Name: </label>
            <input type="text" maxLength="16" required name="name-input" id="name-text" onChange={setCurrentName}/>
            <br/>
            <br/>
            <label>Review: </label>
            <textarea rows="8" required name="review-input" id="review-text" onChange={setCurrentReview}>
            </textarea>
            <br/>
            <button onClick={addReview()}>Submit</button>
            <ReviewList
                Reviews = {Reviews}
            />
        </form>
    )

    function setCurrentStars() {
        starRating = document.getElementById("star-value").value;
        console.log(starRating)
    }
    function setCurrentName() {
        reviewName = document.getElementById('name-text').value;
        console.log(reviewName)
    }
    function setCurrentReview() {
        reviewText = document.getElementById('review-text').value;
        console.log(reviewText)
    }
    function addReview(starRating, reviewName, reviewText) {
        Reviews.push([starRating, reviewName, reviewText])
        
    }


}

export default ReviewForm;