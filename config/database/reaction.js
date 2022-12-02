let reactions = [
    {
        "eventId": "6371ac5b8d934341e5ba0a0a",
        "name": "like",
        "icon": "https://cdn-icons-png.flaticon.com/512/456/456115.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/739/739282.png",
        "userId": []
    },
    {
        "eventId": "6371ac5b8d934341e5ba0a0a",
        "name": "not-like",
        "icon": "https://cdn-icons-png.flaticon.com/512/1612/1612768.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/1612/1612623.png",
        "userId": []
    },
    {
        "eventId": "6371ac5b8d934341e5ba0a0a",
        "name": "love",
        "icon": "https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/2107/2107952.png",
        "userId": []
    },
    {
        "eventId": "6371ac5b8d934341e5ba0a0a",
        "name": "surprise",
        "icon": "https://cdn-icons-png.flaticon.com/512/2341/2341934.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/2341/2341959.png",
        "userId": []
    }
]



require('dotenv').config()
require('../database')
const Reaction = require('../../models/Reaction')

reactions.forEach(elemento => {
    Reaction.create({
        eventId: elemento.eventId,
        name: elemento.name,
        icon: elemento.icon,
        iconBack: elemento.iconBack,
        userId: elemento.userId
    })
})