const mongoose = require("../configs/database");
const Schema = mongoose.Schema

const ProductSchema = new Schema({
        title: { type: String, required: true, unique: true},
        desc: { type: String , required: true },
        img: { type: String, required: true},
        size: { type: Array },
        color: { type: Array },
        price: { type: Number, required: true},
        inStock: { type: Boolean, default: true },
        category: { type: String, require: true}
    },
    { timestamps: true }
);
const Products = mongoose.model("products", ProductSchema)

module.exports = Products