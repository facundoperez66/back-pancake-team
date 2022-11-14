const user = require("../models/user")

const controller = {

    create: async (req, res) => {
        try{
            let newUser = await user.create(req.body);

            res.status(201).json({
                id: newUser._id,
                success: true,
                message: "El usuario se creo satisfactoriamente",

            });

        } catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        } } 

}

module.exports = controller