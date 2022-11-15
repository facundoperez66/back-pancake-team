const Show = require('../models/Show')

const controller = {
    create: async (req,res) => {
        console.log(req);
        try {
            let new_show = await Show.create(req.body)
            res.status(201).json({
                id: new_show._id,
                succes: true,
                message: "the show was successfully created",
            })
        } catch(error) {
            res.status(400).json({
                succes: false,
                message: error.message
            })

        }

    },
    update: async (req,res) => {
        let { id } = req.params
        try{
            let one = await Show.findOneAndUpdate({ _id: id }, req.body, { new: true })
            
            if(one){
                res.status(200).json({
                id: one._id,
                succes: true,
                message: "the show was successfully modified",
                })
            }else{
                res.status(404).json({
                succes: false,
                message: "the show was not found",
                })
            }
            
        }catch (error){
            res.status(400).json({
                succes: false,
                message: error.message
            })
            

        }
    },
    read: async (req,res) => {
        let query = {}
        
        if(req.query.hotelId){
            query = { name: req.query.hotelId}
        }
        
        try{
            let all = await Show.find(query)
            res.status(200).json({
                response: all,
                succes: true,
                message: "shows were found",
            })
        } catch (error) {
            res.status(400).json({
                succes: false,
                message: error.message
            })

        }
    },

}

module.exports = controller