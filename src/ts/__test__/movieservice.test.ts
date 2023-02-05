/** 
* @jest-environment jsdom 
*/ 


import { getData } from "../services/movieservice"
import { movies} from "../services/__mock__/movieservice";


jest.mock("./../services/movieservice.ts");

jest.mock("axios", () => ({
    get: async (url: string) => {
        return new Promise((resolve, reject) => {
        if (url.endsWith("error")) {
            reject([]);
        } else {
            resolve({ data: {Search: movies} });
        }
        });
        },
}));

beforeEach(() => {
    document.body.innerHTML = ``;     
});    
        
    test("should get test-data",async () => {
        //Arrange
        
        //Act
        let data = await getData ("test");
        
        //Assert
        expect(data).not.toBe(0);
    });

    test("should show error", async () => {
        //Arrange

        //Act
        let data = await getData("error");
        
        //Assert
        expect(data).not.toBe(movies);
    });