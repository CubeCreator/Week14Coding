import React, { useState } from "react";
export const Review = () => {
    
    return (
        <form>
            <label>Name: </label>
            <input type="text" maxlength="16" required name="name-input"/>
            <br/>
            <br/>
            <label>Review: </label>
            <textarea rows="8" required name="review-input">
            </textarea>
            <br/>
            <input type="submit" value="Submit" />
        </form>
        
        
    )
    
}

export default Review;