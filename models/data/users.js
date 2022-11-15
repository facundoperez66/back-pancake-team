let users =  [
    {
        
        "name": "Alberto",
        "lastName": "Costa",
        "age": 40,
        "photo":"https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyZmlsJTIwZGUlMjBob21icmV8ZW58MHx8MHx8&w=1000&q=80",
        "email": "albertcosta123@gmail.com",
        "password": "aCosta1234",
        "code": 3247,
        "verified": true,
        "logged": true
    },{
        
        "name": "Juan",
        "lastName": "Fernandez",
        "age": 30,
        "photo":"https://i.pinimg.com/originals/cb/5d/64/cb5d64be736ab84602ee1bcd20303d4e.jpg",
        "email": "juanf90@gmail.com",
        "password": "jFndez123",
        "code": 1234,
        "verified": true,
        "logged": true
    },{
        
        "name": "Fernando",
        "lastName": "Orlando",
        "age": 27,
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTQSyTadvHAoZBFjGY0sJONeneJd3AnF1fQ&usqp=CAU",
        "email": "fernandorlando321@gmail.com",
        "password": "Forlando321",
        "code": 3322,
        "verified": true,
        "logged": true
    },{
        
        "name": "Sebastian",
        "lastName": "Puentes",
        "age": 22,
        "photo":"https://s1.eestatic.com/2018/03/12/social/la_jungla_-_social_291483510_69547698_1024x576.jpg",
        "email": "seba22puentes@gmail.com",
        "password": "PuenteS231",
        "code": 2331,
        "verified": true,
        "logged": true
    }
]

require('dotenv').config()
require('../../config/database')

const User = require('../User')

users.forEach(element =>{
    User.create({
        name : element.name,
        lastName : element.lastname,
        age: element.age,
        photo: element.photo,
        email: element.email,
        password: element.password,
        code: element.code,
        verified: element.verified,
        logged: element.logged,

    }
    )
})
