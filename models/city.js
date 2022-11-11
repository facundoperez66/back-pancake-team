const mongoose = require("mongoose");
const schema = new mongoose.schema({
    name: { type: String, required: true },
    continent: { type: String, required: true },
    photo: { type: String, required: true },
    population: { type: Number, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "users", required: true },
})

const city = mongoose.model("cities", schema)

module.exports = city