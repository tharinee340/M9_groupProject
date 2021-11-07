const Products = require('../models/products')
const jwt = require('jsonwebtoken')

module.exports = {
    addProduct: async (req, res) => {
        const newProduct = new Products(req.body)
        try {
            const saveProduct = await newProduct.save();
            res.status(200).json(saveProduct)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    updateProduct: async (req, res) => {
        try {
            const updateProduct = await Products.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true }
            )
            res.status(200).json(updateProduct)
    
        } catch(err) {
            res.status(500).json(err);
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await Products.findByIdAndDelete(req.params.id)
            res.status(200).json("Product has been deleted.")
        }catch (err) {
            res.status(500).json(err)
        }
    },
    getProduct: async (req, res) => {
        try {
            const product = await Products.findById(req.params.id)
            res.status(200).json(product)
        }catch (err) {
            res.status(500).json(err)
        }
    },
    getAllProduct: async (req, res) => {
        
        const queryCategory = req.query.category;
        try {
            let products 
            if (queryCategory) {
                products = await Products.find({
                    category: {
                        $in: [queryCategory]
                    }
                })

            } else {
                products = await Products.find()
            }
            res.status(200).json(products)
        } catch(err) {
            res.status(500).json(err)
        }
    }
}