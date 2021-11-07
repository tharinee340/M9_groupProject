const router = require('express').Router();
const { verifyTokenAndAuthen , verifyToken, verifyTokenAndAdmin } = require('./verifyToken')
const { addOrder, updateOrder, deleteOrder, getOrder, getAllOrder, getIncome } = require('../controllers/order.controller');

router.post('/add', verifyToken, addOrder)
router.put('/update/:id', verifyTokenAndAdmin, updateOrder)
router.delete('/delete/:id', verifyTokenAndAdmin, deleteOrder)
router.get('/find/:userId', verifyTokenAndAuthen, getOrder)
router.get('/', verifyTokenAndAdmin, getAllOrder)
router.get('/income', verifyTokenAndAdmin, getIncome)
module.exports = router;