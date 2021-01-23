const database = require("../configuracion/database");
const user = {}
const jwt = require("jsonwebtoken");
const JWTSing = "myPass"



user.createUser = async (req, res)=>{
    const email = req.body.email;
    const body = req.body
    //check valid email
    checkEmail(email);

    //create record
    const newUser = await database.user.create(body)
    .catch(err =>{
        res.status(500).json({
            message : "Error DataBase",
            error : err
        })
    })
    res.status(201).json({
        message : "User create succesfully",
        newUser
    })

}

//auxiliar functions
function checkEmail(validEmail){
    //check valid email
    const validEmail = await database.user.findOne({
        where : {
            email : email
        }
    }).catch(err =>{
        res.status(500).json({
            message :"Error DataBase",
            error : err
        })
    })
    //return if email is used
    if(validEmail){
        return res.status(400).json({
            message: "The email is registered "
        })
    }
}

module.exports = user;