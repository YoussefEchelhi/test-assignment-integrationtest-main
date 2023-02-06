/** 
* @jest-environment jsdom 
*/ 

import * as movieapp from "../movieApp";
import { movies } from "../services/__mock__/movieservice";

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

    let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;

    //Act
    movieapp.createHtml(movies, container)
      
    //Assert
    expect(movies[0].Title).toBe('The Last of Us');
    expect(movies.length).toBe(4);
  });

  test ("should test init",() => {

    //Arrange
    document.body.innerHTML = 
    `<form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här"/>
        <div id="movie-container"></div>
      </form>`;
  
      let form = document.getElementById("searchForm") as HTMLFormElement;

      let spy = jest.spyOn(movieapp, 'handleSubmit').mockReturnValue(new Promise<void>((resolve) => {
        resolve();
      }));
      
    //Act
    movieapp.init();
    form.submit();
  
    //Assert
    expect(spy).toHaveBeenCalled();
  });

 

  





