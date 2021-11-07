const router = require('express').Router();
const {payment, getCharge} = require('../controllers/stripe.controller')
const { verifyToken, verifyTokenAndAuthen } = require('./verifyToken')

router.post("/payment", payment)
router.get("/getCharge/:id", getCharge)

module.exports = router