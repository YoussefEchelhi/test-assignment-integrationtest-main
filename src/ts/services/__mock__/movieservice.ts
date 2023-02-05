/** 
* @jest-enviroment jsdom 
*/ 

import { IMovie } from "../../models/Movie";

export let movies:IMovie[] = [
    {
    Title: "The Last of Us",
    imdbID: "tt3581920",
    Type: "Drama",
    Poster: "..",
    Year: "2023"
    },
    {
    Title: "Avatar: The Way of Water",
    imdbID: "tt1630029",
    Type: "Fantasy",
    Poster: "..",
    Year: "2022"
    },
    {
    Title: "A Man Called Otto",
    imdbID: "tt7405458",
    Type: "Comedy",
    Poster: "..",
    Year: "2022"
    },
    {
    Title: "Top Gun",
    imdbID: "tt0092099",
    Type: "Action",
    Poster: "..",
    Year: "1986"
    }

];  

export async function getData (SearchText: string): Promise<IMovie[]> {
    return new Promise((resolve, reject)=>{
        if (SearchText !== "error") {
        resolve(movies);
      } else {
        reject ([]);
      }
    }); 
}