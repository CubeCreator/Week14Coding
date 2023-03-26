import React, { useState } from "react";

export const Review = ({reviews, starRating, reviewName, reviewText}) => {
    
    //Code for the Review Text
    
    return (
        <>
            <tr>
                <td>{starRating}</td> 
                <td>{reviewName}</td>
                <td>{reviewText}</td>
            </tr>
        </>
    )
    
}

export default Review;