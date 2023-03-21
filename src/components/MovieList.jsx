

//Importing components for this page
import React from "react";
import { Component } from "react";
import { Movie } from "./Movie";
import { ReviewList } from "./ReviewList";

//Exporting and Formatting the component
export const MovieList = () => {

    return (
        <form>
            <Movie/>

            <ReviewList/>
        </form>
    )
}

export default MovieList;