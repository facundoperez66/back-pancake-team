const city = require("../models/city")

const controller = {
    create: async (req, res) => {
        try{
            let newCity = await city.create(req.body);

            res.status(201).json({
                id: newCity._id,
        success: true,
        message: "La ciudad se creó satisfactoriamente",
            })
        } catch (error){
            res.status(400).json({
                success: false,
                message: "error.message"
            })



        }
    }
}

module.exports = controller