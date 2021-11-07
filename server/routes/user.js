const router = require("express").Router();
const { verifyTokenAndAuthen , verifyTokenAndAdmin } = require('./verifyToken')
const { updateUser, deleteUser, getUser, getAllUser } = require('../controllers/user.controller')

router.put("/:id",verifyTokenAndAuthen, updateUser)
router.delete("/delete/:id",verifyTokenAndAuthen, deleteUser)
router.get("/find/:id", verifyTokenAndAdmin, getUser)
router.get("/findAll", verifyTokenAndAdmin, getAllUser)

module.exports = router