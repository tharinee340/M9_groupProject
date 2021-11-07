const mongoose = require("../configs/database");
const Schema = mongoose.Schema

const OrderSchema = new Schema({
        userId: { type: String, required: true },
        products: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        amount: {type: Number, required: true},
        status: { type: String, default: "pending" },
    },
    { timestamps: true }
);
const Order = mongoose.model("orders", OrderSchema)

module.exports = Order