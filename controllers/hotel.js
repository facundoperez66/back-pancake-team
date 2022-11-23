const Hotel = require('../models/Hotel')

const controller = {
    create: async (req,res) => {
        try {
            let new_hotel = await Hotel.create(req.body)
            res.status(201).json({
                id: new_hotel._id,
                success: true,
                message: "the hotel was successfully created",
                new_hotel
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message,
                
            })

        }

    },

    read: async (req,res) => {
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
        if (req.query.userId){
            query = {userId: req.query.userId}
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
                    message: 'Hotel found!',
                    data: hotel,
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Hotel not found!',
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },

    update: async (req,res) => {
        let { id } = req.params
        try{
            let one = await Hotel.findOneAndUpdate({ _id: id }, req.body, { new: true })
            
            if(one){
                res.status(200).json({
                id: one._id,
                succes: true,
                message: "the hotel was successfully modified",
                })
            }else{
                res.status(404).json({
                succes: false,
                message: "the hotel was not found",
                })
            }
            
        }catch (error){
            res.status(400).json({
                succes: false,
                message: error.message
            })
            

        }
    },

    destroy: async (req,res) => {
        let { id } = req.params
        try{
            let one = await Hotel.findOneAndDelete({ _id: id})
            if(one){
                res.status(200).json({
                id: one._id,
                succes: true,
                message: "the hotel was successfully deleted",
                })
            }else{
                res.status(404).json({
                succes: false,
                message: "the hotel was not found",
                })
            }

        }catch(error){
            res.status(400).json({
            succes: false,
            message: error.message
            })
        }
    },
}

module.exports = controller