let users = [
    {
        "name": "Alberto",
        "lastname": "Costa",
        "role":"admin",
        "photo": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        "age": 40,
        "email": "albertcosta123@gmail.com",
        "password": "aCosta1234",
        "code": 3247,
        "verified": true,
        "logged": true
    },{
        "name": "Juan",
        "lastname": "Fernandez",
        "role":"admin",
        "photo": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
        "age": 30,
        "email": "juanf90@gmail.com",
        "password": "jFndez123",
        "code": 1234,
        "verified": true,
        "logged": true
    },{
        "name": "Fernando",
        "lastname": "Orlando",
        "role":"admin",
        "photo": "https://www.pngkit.com/png/full/202-2022283_usuario-icono-perfil-de-usuario.png",
        "age": 27,
        "email": "fernandorlando321@gmail.com",
        "password": "Forlando321",
        "code": 3322,
        "verified": true,
        "logged": true
    },{
        "name": "Sebastian",
        "lastname": "Puentes",
        "role":"admin",
        "photo": "https://cdn-icons-png.flaticon.com/512/2919/2919906.png",
        "age": 22,
        "email": "seba22puentes@gmail.com",
        "password": "PuenteS231",
        "code": 2331,
        "verified": true,
        "logged": true
    }



]


require("dotenv").config();
require("../database")
const user = require("../../models/user")

users.forEach(element => {
    user.create({
        name: element.name,
        lastName: element.lastname,
        role: element.role,
        photo: element.photo,
        age: element.age,
        email: element.email,
        password: element.password,
        code: element.code,
        verified: element.verified,
        logged: element.logged
    })
})