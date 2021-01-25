const jwt = require ("jsonwebtoken");
const JWTSing = "myPass";
const generalMid = {};

generalMid.validateToken = (req, res, next)=>{
    const token =  req.headers.authorization;

    const tokenVerificado = jwt.verify(token, JWTSing,(error, decoded)=>{
        if(error){
            res.status(403).json({
                message: "Problem token verification",
                error
            })
        }else{
            res.locals.Payload = decoded; 
            next();
        }
    })
}

module.exports= generalMid;