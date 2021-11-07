const mongoose = require("../configs/database");
const Schema = mongoose.Schema

const CartSchema = new Schema({
        userId: { type: String, required: true },
        products: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1,
                }
            }
        ],
    },
    { timestamps: true }
);
const Cart = mongoose.model("carts", CartSchema)

module.exports = Cart