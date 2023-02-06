/***
* @jest-environment jsdom
*/

import { movies } from "../services/__mock__/movieservice";
import { movieSort } from "../functions";

jest.mock("../services/movieservice");

beforeEach (()=>{
  document.body.innerHTML="";
});

test("shoud moviesort from A if correct", ()=>{
   
    //Arrange
    let testData = movies;

    //Act
    let result =  movieSort(testData, true);

    //Assert
    expect(testData.length).toBe(4);
    expect(testData[0].Title).toBe("A Man Called Otto")
});

test("should moviesort descending if correct",  ()=>{

    //Arrange
    let testData = movies;
    
    //Act
    let result = movieSort(testData, false);

    //Assert
    expect(testData.length).toBe(4);
    expect(testData[0].Title).toBe("Top Gun")
});
