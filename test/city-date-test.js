const app = require("./app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest")

describe("POST /api/cities/", (done) => {
    let city={
        "name":"Paris",
        "continent":"Europe",
        "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        "population":2229621 ,
        "userId":"636fe5cd55d86e11bfaebc4a" 
    }
    it("Ver que el usuario complete el campo name con un string", (done) =>{
        request(app)
        .post("/api/cities/")
        .send(city)
        .expect(response =>{
            assert.isString(response.body.new_City.name)
        })
        .end((err,res) =>{
            if(err){
                return done(err);
            }
            console.log
            done()
        })
    })


})