const Itinerary = require('../models/Itinerary');
const controller = {

    read: async (req, res) => {

        let query = {};
        if (req.query.cityId) {
            query = {
                cityId: req.query.cityId
            };
        }

        try {
            let allItineraries = await Itinerary.find(query);
            if (allItineraries) {
                res.status(200).json({
                    success: true,
                    message: 'All itineraries!',
                    data: allItineraries,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'No itineraries found!',
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    create: async (req, res) => {
        try {
            let new_itinerary = await Itinerary.create(req.body);
            res.status(201).json({
                id: new_itinerary._id,
                success: true,
                message: 'Itinerary created',
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
}

module.exports = controller;