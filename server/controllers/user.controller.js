const User2 = require('../models/user2')
const jwt = require('jsonwebtoken')

module.exports = {
    updateUser: async (req, res) => {
        if (req.body.password) {
            const user = await User2.findOne({ _id: req.params.id });
            req.body.password = await bcrypt.compareSync(password, user.password);
        }
        try {
            const updateUser = await User2.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true }
            )
            res.status(200).json(updateUser)
    
        } catch(err) {
            res.status(500).json(err);
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User2.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted.")
        }catch (err) {
            res.status(500).json(err)
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await User2.findById(req.params.id)
            const { password, ...others } = user._doc
            res.status(200).json(others)
        }catch (err) {
            res.status(500).json(err)
        }
    },
    getAllUser: async (req,res) => {
        try {
            const users = await User2.find()
            res.status(200).json(users)
        }catch (err) {
            res.status(500).json(err)
        }
    }
}