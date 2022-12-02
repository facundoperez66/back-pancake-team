const Reaction = require('../models/Reaction');

const controller = {

    create: async (req, res) => {
        try {
            let new_reaction = await Reaction.create(req.body);
            res.status(200).json({
                success: true,
                message: 'The reaction was created successfully!',
                data: new_reaction,
                id: new_reaction._id
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: 'The reaction was not created!',
                data: error
            })
        }
    },

    updateReaction: async (req, res) => {

        let query = {};
        let Id = req.user.id

        if (req.query.itineraryId) {
            query = {
                itineraryId: req.query.itineraryId
            };
        }

        if (req.query.showId) {
            query = {
                showId: req.query.showId
            };
        }

        if (req.query.name) {
            query = {
                ...query,
                name: req.query.name
            };
        }

        try {
            let reaction = await Reaction.findOne(query)
            if (reaction) {
                if (reaction.userId.includes(Id)) {
                    await Reaction.findOneAndUpdate({ _id: reaction._id }, { $pull: { userId: Id } }, { new: true })
                    res.status(200).json({
                        message: `Event dis${reaction.name}`,
                        success: true,
                    })
                } else {
                    await Reaction.findOneAndUpdate({ _id: reaction._id }, { $push: { userId: Id } }, { new: true })
                    res.status(200).json({
                        message: `Event ${reaction.name}`,
                        success: true,
                    })
                }
            } else {
                res.status(404).json({
                    message: `The reaction dont exist in the itinerary`,
                    success: false
                })
            }
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },

    read: async (req, res) => {
        let query = {};
        if (req.query.itineraryId) {
            query = { itineraryId: req.query.itineraryId };
        }

        if (req.query.showId) {
            query = { showId: req.query.showId };
        }

        if (req.query.userId) {
            query = { userId: req.query.userId };
        }
        try {

            let reactions = await Reaction.find(query)
                .populate({ path: 'userId', select: 'name lastName photo' })
                .populate({ path: 'showId', select: 'name photo -_id' })
                .populate({ path: 'itineraryId', select: 'name photo -_id' })
                
            if (reactions.length > 0) {

                let lengthOfReactions = {}
                reactions.forEach(reaction => lengthOfReactions[reaction.name] = reaction.userId.length)

                res.status(200).json({
                    lengthOfReactions,
                    data: reactions,
                    success: true,
                    message: `All reactions`,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'No reactions found',
                    data: [],
                });
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                success: false,
                message: error.message,
                data: error
            })
        }
    },

    deleteReaction: async (req, res) => {
        let { id } = req.params

        try {
            let reaction = await Reaction.findOneAndUpdate({ _id: id }, { $pull: { userId: req.user.id } }, { new: true })
            if (reaction) {
                res.status(200).json({
                    data: reaction,
                    message: `reaction deleted`,
                    success: true,
                })
            } else {
                res.status(404).json({
                    message: `reaction not found`,
                    success: false,
                })
            }
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },
}

module.exports = controller;