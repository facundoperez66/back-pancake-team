let router = require("express").Router;

let user = require("./api/users")
let city = require('./city');


router.use("/api/users", user)
router.use('/api/cities', city);


module.exports = router;
