let router = require("express").Router;

let user = require("./api/users")


router.use("/api/users", user)

module.exports = router;
