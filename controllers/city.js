const City = require('../models/City');

const controller = {
    create: async (req, res) => {
        try {
            let new_city = await City.create(req.body);
            res.status(201).json({
                id: new_city._id,
                success: true,
                message: 'City created',
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
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
            let allCities = await City.find(query);
            if (allCities) {
                res.status(200).json({
                    success: true,
                    message: 'All cities',
                    data: allCities,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'No cities found',
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
}

module.exports = controller








