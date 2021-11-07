const Cart = require('../models/cart')
const jwt = require('jsonwebtoken')

module.exports = {
    addCart: async (req, res) => {
        const newCart = new Cart(req.body)
        try {
            const saveCart = await newCart.save();
            res.status(200).json(saveCart)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    updateCart: async (req, res) => {
        try {
            const updateCart = await Cart.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true }
            )
            res.status(200).json(updateCart)
    
        } catch(err) {
            res.status(500).json(err);
        }
    },
    deleteCart: async (req, res) => {
        try {
            await Cart.findByIdAndDelete(req.params.id)
            res.status(200).json("Cart has been deleted.")
        }catch (err) {
            res.status(500).json(err)
        }
    },
    getCart: async (req, res) => {
        try {
            const cart = await Cart.findOne({userId: req.params.userId})
            res.status(200).json(cart)
        }catch (err) {
            res.status(500).json(err)
        }

    },
    getAllCart: async (req, res) => {
        try {
            const carts = await Cart.find()
            res.status(200).json(carts)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}