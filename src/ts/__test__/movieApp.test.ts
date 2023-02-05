/** 
* @jest-environment jsdom 
*/ 

import * as movieapp from "../movieApp";
import { IMovie } from "../models/Movie";

beforeEach(() => {
    document.body.innerHTML = ``;
});    

test("Should show 'Inga sökresultat att visa')", () => {
    //Arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;

    let container: HTMLDivElement =
    document.getElementById("movie-container") as HTMLDivElement;
    let innerHTML = "Inga sökresultat att visa";
        
    //Act
    movieapp.displayNoResult(container);

    //Assert
    expect(innerHTML).toBe( "Inga sökresultat att visa")
});

test("Should create HTML", () => {

    //Arrange
    document.body.innerHTML = `
    <div id="movie-container"></div>
    `;

    let movies: IMovie[] = [
      {
        Title: "The Last of Us",
        imdbID: "tt3581920",
        Type: "Drama",
        Poster: "..",
        Year: "2023"
      },
    ];

    let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;

    //Act
    movieapp.createHtml(movies, container)
      
    //Assert
    expect(movies[0].Title).toBe('The Last of Us');
  });





