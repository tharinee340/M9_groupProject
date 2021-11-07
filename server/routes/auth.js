const { facebook, register, login } = require('../controllers/auth.controller');
const router = require('express').Router();

router.post("/signin/facebook", facebook)

//REGISTER
router.post("/register", register)

//LOGIN
router.post("/login", login)


module.exports = router