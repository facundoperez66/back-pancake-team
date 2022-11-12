let cities = [
    {
        name: "Paris",
        continent: "Europe",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
        population: "2.229.621",
        userId: ""

    }, {
        id: "",
        name: "Dubai",
        continent: "Asia",
        photo: "https://images.lucentcms.com/greca/2019/09/5d839d7238ed6-dubai.jpg",
        population: "4.000.000",
        userId: ""

    }, {
        name: "Amsterdam",
        continent: "Europe",
        photo: "https://a.cdn-hotels.com/gdcs/production166/d427/b65225f3-0135-4c38-bee6-ddcb1e92f7eb.jpg",
        population: "17.193.499",
        userId: ""
    }, {
        name: "Madrid",
        continent: "Europe",
        photo: "https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg",
        population: "3.286.662",
        userId: ""
    }, {
        name: "Roma",
        continent: "Europe",
        photo: "https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg",
        population: "2.857.321",
        userId: ""

    }, {
        name: "Berlin",
        continent: "Europe",
        photo: "https://www.cronista.com/files/image/143/143851/5ff79e709663a_950_534!.jpg?s=a04d78733391c9f91fc16b94f60099cf&d=1654008856",
        population: "3.770.000",
        userId: ""
    }, {
        name: "New York",
        continent: "America",
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
        population: "22.085.649",
        userId: ""

    }, {
        name: "Londres",
        continent: "Europe",
        photo: "https://utopiaurbana.city/wp-content/uploads/2022/09/Rutas-por-Londres.jpg",
        population: "8.982.000",
        userId: ""

    }, {
        name: "Munich",
        continent: "Europe",
        photo: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/501000/501501-munich.jpg",
        population: "1.562.096",
        userId: ""
    }, {
        name: "Barcelona",
        continent: "Europe",
        photo: "https://as01.epimg.net/diarioas/imagenes/2022/04/30/actualidad/1651323395_313362_1651323476_noticia_normal_recorte1.jpg",
        population: "1.639.981",
        userId: ""
    }, { 
        name: "Viena",
        continent: "Europe",
        photo: "https://www.civitatis.com/blog/wp-content/uploads/2010/07/shutterstock_1450254959-1920x1280.jpg",
        population: "1.700.000",
        userId: ""
    }, {
        name: "Milan",
        continent: "Europe",
        photo: "https://www.enmilan.net/wp-content/uploads/2019/01/que-ver-en-milan.jpeg",
        population: "1.396.522",
        userId: ""
    }, 



]


require("dotenv").config();
require("../database");
const city = require("../../models/city");

cities.forEach((element) => {
    city.create({
        name: element.name,
        continent: element.continent,
        photo: element.photo,
        population: element.population,
        userId: element.userId,
    })
})