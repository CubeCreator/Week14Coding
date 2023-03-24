import React, { useState } from "react";
export const Review = (Reviews) => {

    //Code for the Review Text
    return (
        <form>
            <label>Name: </label>
            <input type="text" maxLength="16" required name="name-input" id="name-text"/>
            <br/>
            <br/>
            <label>Review: </label>
            <textarea rows="8" required name="review-input" id="review-text">
            </textarea>
            <br/>
            <input type="submit" value="Submit" onClick={Reviews} />
        </form>
        
        
    )
    
}

export default Review;