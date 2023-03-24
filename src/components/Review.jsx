import React, { useState } from "react";

export const Review = (Reviews) => {
    
    //Code for the Review Text
    

    return (
        <form>
            <label>Name: </label>
            <input type="text" maxLength="16" required name="name-input" id="name-text" onChange={reviewName=this.value}/>
            <br/>
            <br/>
            <label>Review: </label>
            <textarea rows="8" required name="review-input" id="review-text" onChange={reviewText=this.value}>
            </textarea>
            <br/>
            <input type="submit" value="Submit" onClick={addReview()} />
        </form>
        
        
    )
    function addReview() {
        // (Reviews.push({starRating, reviewName, reviewText}))
    }
    
    
}

export default Review;