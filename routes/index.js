let router = require('express').Router();


let user = require("./users");
let city = require("./city")
let itinerary = require('./itinerary');



router.use("/api/users", user);
router.use("/api/cities", city);
router.use('/api/itineraries', itinerary)



module.exports = router;