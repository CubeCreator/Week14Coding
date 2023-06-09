import React from "react";
export const Movie = ({Title, Image, Genre, AgeRating, Year, Synopsis}) => {

    return (
        <div>
            <h1>{Title}</h1>
            <img src={Image} height="256"/>
            <table>
                <tbody>
                    <tr>
                        <th>Genre: </th>
                        <td>{Genre}</td>
                    </tr>
                    <tr>
                        <th>Age Rating: </th>
                        <td>{AgeRating}</td>
                    </tr>
                    <tr>
                        <th>Release Date: </th>
                        <td>{Year}</td>
                    </tr>
                    <tr>
                        <th>Synopsis: </th>
                        <td>{Synopsis}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Movie;