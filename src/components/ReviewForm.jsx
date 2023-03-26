import React , { useState } from "react";
import ReviewList from "./ReviewList.jsx";
import Stars from "./Stars.jsx";
export const ReviewForm = ({Reviews}) => {

    let [currentStars, setCurrentStars] = useState(0)
    let [currentName, setCurrentName] = useState('')
    let [currentReview, setCurrentReview] = useState('')

    return (
        <form>
            <h3>Rate:</h3>
            <Stars setValueCurrentStars={(e) => setValueCurrentStars(e)} id="star-value"/>
            <label>Name: </label>
            <input type="text" maxLength="16" required name="name-input" id="name-text" onChange={(e) => setValueCurrentName(e)}/>
            <br/>
            <br/>
            <label>Review: </label>
            <textarea rows="8" required name="review-input" id="review-text" onChange={(e) => setValueCurrentReview(e)}>
            </textarea>
            <br/>
            <button onClick={(e) => addReview(e.preventDefault(), currentStars, currentName, currentReview)}>Enter Review</button>
            <ReviewList
                Reviews = {Reviews}
                starRating = {Reviews.starRating}
                reviewName = {Reviews.reviewName}
                reviewText = {Reviews.reviewText}
            />
        </form>
    )
    //Functions to handle the Value Changes and Review Submissions
    function setValueCurrentStars(e) {
        setCurrentStars(e.target.value)
        console.log(currentStars)
    }
    function setValueCurrentName(e) {
        setCurrentName(e.target.value)
        console.log(currentName)
    }
    function setValueCurrentReview(e) {
        setCurrentReview(e.target.value)
        console.log(currentReview)
    }
    function addReview(e, currentStars, currentName, currentReview) {
        Reviews.starRating = currentStars
        Reviews.reviewName = currentName
        Reviews.reviewText = currentReview
        Reviews.push([Reviews.starRating, Reviews.reviewName, Reviews.reviewText])

        //Compare the logs to see if they match
        // console.log(currentStars, currentName, currentReview, "before")
        // console.log(Reviews.starRating, Reviews.reviewName, Reviews.reviewText, "after")
        
        //See if the items were added to the Array
        console.log(Reviews)
    }


}

export default ReviewForm;