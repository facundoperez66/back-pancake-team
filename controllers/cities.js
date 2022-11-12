const city = require("../models/city")

const controller = {
    create: async (req, res) => {
        try {
            let newCity = await city.create(req.body);

            res.status(201).json({
                id: newCity._id,
                success: true,
                message: "La ciudad se creó satisfactoriamente",
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "error.message"
            })



        };
    },

    read: async (req, res) => {
        let query = {};
        if (req.query.continent) {
            query = {
                continent: req.query.continent
            };
        }
        if (req.query.name) {
            query = {
                ...query,
                name: { $regex: req.query.name, $options: 'i' },
            };
        }

        try {
            let Cities = await city.find(query);
            if (Cities) {
                res.status(200).json({
                    success: true,
                    message: 'All cities',
                    data: Cities,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Not cities found',
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    }
}









module.exports = controller