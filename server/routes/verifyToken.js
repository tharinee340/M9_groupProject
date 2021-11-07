const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    
    const authHeader = req.headers.token
    console.log(authHeader)
    //เช็คว่า login ยังมี token มั้ย
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (err,user) => {
            if (err) res.status(403).json("Token is not valid!")
            req.user = user;
            next()
           
        })
    } else {
        return res.status(401).json("You are not authenticated!")
    }
}


//เช็คว่าเป็น admin รึป่าว
const verifyTokenAndAuthen = (req, res, next) => {
    verifyToken(req,res,() => {
        //เช็คว่าเป็น admin หรือ user      
        if (req.user.id === req.params.id || req.user.isAdmin) {
            
            next()
        }else {
            res.status(403).json("You are not allowed to do this")
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req,res,() => {
        //เช็คว่าเป็น admin หรือ user
        if (req.user.isAdmin) {
            next()
        }else {
            res.status(403).json("You are not allowed to do this")
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthen, verifyTokenAndAdmin }