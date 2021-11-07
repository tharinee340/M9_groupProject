const router = require("express").Router();
const { verifyTokenAndAdmin } = require('./verifyToken')
const { addProduct, updateProduct, deleteProduct, getProduct, getAllProduct } = require('../controllers/product.controller')

router.post('/add', verifyTokenAndAdmin, addProduct)
router.put('/update/:id', verifyTokenAndAdmin, updateProduct)
router.delete('/delete/:id', verifyTokenAndAdmin, deleteProduct)
router.get('/find/:id', getProduct)
router.get('/', getAllProduct)

module.exports = router