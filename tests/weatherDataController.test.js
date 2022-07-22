const weatherData = require("../models/weatherDataModel");
const weatherDataController = require("../controllers/weatherDataController");

jest.mock("../models/weatherDataModel")

let req;
let res;

describe("Given a getData function", ()=>{
    describe("When invoked with valid arguments", ()=>{
        beforeEach(()=>{
            req = {
                body:{}
            };
              res = {
                json: jest.fn(),
                status: jest.fn(),
              };
              weatherData.find = jest.fn();
        })

   
          test('Then res.json should be called', async () => { 
            weatherData.find.mockResolvedValue([{}]);
            await weatherDataController.getData(req, res);
            expect(res.json).toHaveBeenCalled();
           })
    })
})