
//Importing components for this page
import React from "react";
import { Component } from "react";
import { Movie } from "./Movie";
import ReviewForm from "./ReviewForm";


let Movies = [{
    Title: "Puss in Boots: The Last Wish",
    Year: "2022",
    AgeRating: "PG",
    Genre: "Action Comedy",
    Image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg/220px-Puss_in_Boots_The_Last_Wish_poster.jpg",
    Synopsis: "Puss in Boots discovers that his passion for adventure has taken its toll when he learns that he has burnt through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    Reviews: []
},
{
    Title: "The Thing",
    Year: "1982",
    AgeRating: "R",
    Genre: "Horror",
    Image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8_TRLy8QuX-FGMlNnlM56gkpnk8wTzLGH4pYOufwK4ajSqFvv",
    Synopsis: "In remote Antarctica, a group of American research scientists are disturbed at their base camp by a helicopter shooting at a sled dog. When they take in the dog, it brutally attacks both human beings and canines in the camp and they discover that the beast can assume the shape of its victims. A resourceful helicopter pilot and the camp doctor lead the camp crew in a desperate, gory battle against the vicious creature before it picks them all off, one by one.",
    Reviews: []
},
{
    Title: "12 Angry Men",
    Year: "1957",
    AgeRating: "PG",
    Genre: "Drama",
    Image: "http://www.movienewsletters.net/photos/019253R1.jpg",
    Synopsis: "Following the closing arguments in a murder trial, the 12 members of the jury must deliberate, with a guilty verdict meaning death for the accused, an inner-city teen. As the dozen men try to reach a unanimous decision while sequestered in a room, one juror casts considerable doubt on elements of the case. Personal issues soon rise to the surface, and conflict threatens to derail the delicate process that will decide one boy's fate.",
    Reviews: []
},
{
    Title: "Shawshank Redemption",
    Year: "1994",
    AgeRating: "R",
    Genre: "Drama",
    Image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51zUbui+gbL._AC_SY445_.jpg",
    Synopsis: "Andy Dufresne is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes. While there, he forms a friendship with Red, experiences brutality of prison life, adapts, helps the warden, etc., all in 19 years.",
    Reviews: []
},
{
    Title: "The Incredibles",
    Year: "2004",
    AgeRating: "PG",
    Genre: "Superhero Comedy",
    Image: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg",
    Synopsis: "In this lauded Pixar animated film, married superheroes Mr. Incredible and Elastigirl are forced to assume mundane lives as Bob and Helen Parr after all super-powered activities have been banned by the government. While Mr. Incredible loves his wife and kids, he longs to return to a life of adventure, and he gets a chance when summoned to an island to battle an out-of-control robot. Soon, Mr. Incredible is in trouble, and it's up to his family to save him.",
    Reviews: []
}
]

//Exporting and Formatting the component
export const MovieList = (props) => {

    return (

        <div>
            {Movies.map((movie, index) => (
                <div>
                    <Movie
                        Title = {movie.Title}
                        Year = {movie.Year}
                        Image = {movie.Image}
                        Genre = {movie.Genre}
                        AgeRating = {movie.AgeRating}
                        Synopsis = {movie.Synopsis}
                    />
                    <ReviewForm/>
                </div>
            ))}

        </div>
    )
}

export default MovieList;