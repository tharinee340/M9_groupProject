const router = require('express').Router();
const auth = require('./auth')
const user = require('./user')
const product = require('./product')
const cart = require('./cart')
const order = require('./order')
const checkout = require('./stripe')


router.use("/auth", auth)
router.use("/user", user)
router.use("/product", product)
router.use("/cart", cart)
router.use("/order", order)
router.use("/checkout", checkout)

module.exports = router;