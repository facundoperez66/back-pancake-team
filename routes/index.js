let router = require('express').Router();


let user = require("./user");
let city = require("./city")
let itinerary = require('./itinerary');
let hotel = require ('./hotel')
let show = require ('./show')



router.use("/api/cities", city);
router.use('/api/itineraries', itinerary)
router.use('/api/user', user)
router.use('/api/hotel',hotel)
router.use('/api/show', show)


module.exports = router;