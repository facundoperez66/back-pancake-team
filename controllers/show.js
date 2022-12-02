const Show = require('../models/Show');

const controller = {

    create: async (req, res) => {
        try {
            let new_show = await Show.create(req.body);
            res.status(201).json({
                id: new_show._id,
                success: true,
                message: "show successfully created",
                new_show,
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    read: async (req, res) => {

        let query = {};
        if (req.query.hotelId) {
            query = {
                hotelId: req.query.hotelId
            };
        }

        if (req.query.userId) {
            query = {
                userId: req.query.userId
            };
        }

        try {
            let allShows = await Show.find(query);
            if (allShows.length > 0) {
                res.status(200).json({
                    success: true,
                    message: 'All Shows',
                    data: allShows,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'No Shows found',
                    data: [],
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
            let oneShowFind = await Show.findById(id)
            if (oneShowFind.userId.equals(req.user.id)) {
                let oneShow = await Show.findOneAndUpdate({ _id: id }, req.body, { new: true });
                if (oneShow) {
                    res.status(200).json({
                        success: true,
                        message: 'Show succesfully updated',
                        data: oneShow,
                    });
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'Show not found',
                    });
                }
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Unauthorized',
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
            let show = await Show.findOneAndDelete({ _id: id });
            if (show) {
                res.status(200).json({
                    success: true,
                    message: 'Show deleted',
                    data: show,
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Show not found',
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