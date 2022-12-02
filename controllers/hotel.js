const Hotel = require('../models/Hotel');

const controller = {

    create: async (req, res) => {
        try {
            let new_hotel = await Hotel.create(req.body);
            res.status(201).json({
                id: new_hotel._id,
                succes: true,
                message: "new hotel successfully created",
                new_hotel,
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            })
        }
    },

    read: async (req, res) => {
        let query = {}
        let order = {}

        if (req.query.name) {
            query = {
                ...query,
                name: { $regex: req.query.name, $options: 'i' },
            };
        }
        if (req.query.order) {
            order = { name: req.query.order }
        }
        if (req.query.userId) {
            query = {
                userId: req.query.userId
            }
        }

        try {
            let allHotels = await Hotel.find(query).sort(order)
            if (allHotels.length > 0) {
                res.status(200).json({
                    response: allHotels,
                    success: true,
                    message: "all hotels have been found"
                })
            } else {
                res.status(404).json({
                    response: [],
                    success: false,
                    message: "hotels not found",
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    readOne: async (req, res) => {

        let { id } = req.params

        try {
            let hotel = await Hotel.findOne({ _id: id }).populate({ path: 'userId', select: 'name photo -_id' });

            if (hotel) {
                res.status(200).json({
                    success: true,
                    message: 'Hotel found',
                    data: hotel,
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Hotel not found',
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },

    update: async (req, res) => {
        let { id } = req.params;

        try {
            let oneHotelFind = await Hotel.findById(id)
            if (oneHotelFind.userId.equals(req.user.id)) {
                let oneHotel = await Hotel.findOneAndUpdate({ _id: id }, req.body, { new: true });
                if (oneHotel) {
                    res.status(200).json({
                        success: true,
                        message: 'Hotel updated succesfully',
                        data: oneHotel,
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'Hotel not found',
                    });
                }
            } else {
                res.status(403).json({
                    success: false,
                    message: "You can't update this hotel",
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },

    destroyOne: async (req, res) => {
        let { id } = req.params;

        try {
            let oneHotelFind = await Hotel.findById(id)
            if (oneHotelFind.userId.equals(req.user.id)) {
                let hotel = await Hotel.findOneAndDelete({ _id: id });
                if (hotel) {
                    res.status(200).json({
                        success: true,
                        message: 'Hotel deleted',
                        data: hotel,
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'Hotel not found',
                    });
                }
            } else {
                res.status(403).json({
                    success: false,
                    message: "You can't delete this hotel",
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

module.exports = controller;