const router = require('express').Router();
const { verifyTokenAndAuthen , verifyToken, verifyTokenAndAdmin } = require('./verifyToken')
const { addCart, updateCart, deleteCart, getCart, getAllCart } = require('../controllers/cart.controller');

router.post('/add', verifyToken, addCart)
router.put('/update/:id', verifyTokenAndAuthen, updateCart)
router.delete('/delete/:id', verifyTokenAndAuthen, deleteCart)
router.get('/find/:userId', verifyTokenAndAuthen, getCart)
router.get('/', verifyTokenAndAdmin, getAllCart)

module.exports = router