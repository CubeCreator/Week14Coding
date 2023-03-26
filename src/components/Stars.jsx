import React, {useState} from "react";
import { FaStar } from 'react-icons/fa';
export const Stars = ({setValueCurrentStars}) => {

    //Set the value for Star Rating
    const [rating, setRating] = useState(0);

    //Set the display for the Star and the Code for setting the Value
    return (
        <div>
           {[... Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i}>
                        <input type="radio" name="rating" value={ratingValue}  onChange={(e) => setValueCurrentStars(e)} onClick={() => setRating(ratingValue)}/>
                        <FaStar className="star" color={ratingValue < rating + 1 ? "#ffc107" : "#e4e5e9"} size={60}/>
                    </label>
                    )
                })}
        </div>
    )
}

export default Stars;