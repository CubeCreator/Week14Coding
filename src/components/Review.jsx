import React from "react";
export const Review = () => {
    
    return (
        <form>
            <label>Name: </label>
            <input type="text" maxlength="16" required name="name-input"/>
            <br/>
            <label>Review: </label>
            <input type="text" required name="review-input"/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Review;