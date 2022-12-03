const Comment = require('../models/Comment');

const controller = {

    create: async (req, res) => {
        try {
            let new_comment = await (await Comment.create(req.body))
            res.status(201).json({
                id: new_comment._id,
                succes: true,
                message: "New comment successfully created",
                new_comment,
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            })
        }
    },

    read: async (req, res) => {
        let query = {};
        let order = {}

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

        if (req.query.order) {
            order = { date: req.query.order }
        }

        try {

            let comments = await Comment.find(query).sort(order)
                .populate({ path: 'userId', select: 'name lastName photo logged role' });

            if (comments.length > 0) {
                res.status(200).json({
                    response: comments,
                    success: true,
                    message: "All comments have been found"
                })
            } else {
                res.status(404).json({
                    response: [],
                    success: false,
                    message: "Comments not found",
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    update: async (req, res) => {
        let { id } = req.params;

        try {
            let comment = await Comment.findOneAndUpdate({ _id: id}, req.body,{ new: true })

            if (comment) {
                res.status(200).json({
                    success: true,
                    message: "Comment successfully updated",
                    comment,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Comment not found",
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            })
        }
    },

    deleteComment: async (req, res) => {
        let { id } = req.params;

        try {
            let comment = await Comment.findByIdAndDelete(id);
            if (comment) {
                res.status(200).json({
                    success: true,
                    message: "Comment successfully deleted",
                    comment
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Comment not found",
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
}

module.exports = controller;