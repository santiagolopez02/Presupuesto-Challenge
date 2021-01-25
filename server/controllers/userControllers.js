const database = require("../settingDB/database");
const user = {}
const jwt = require("jsonwebtoken");
const JWTSing = "myPass"


//create new user
user.createUser = async (req, res)=>{
    const email = req.body.email;
    const body = req.body

    //create record
    const newUser = await database.user.create(body)
    .catch(err =>{
        res.status(500).json({
            message : "Error DataBase",
            error : err
        })
    })
    if(newUser){
        const token = jwt.sign({
            id: newUser.id,
            username: newUser.email,
        }, JWTSing );

        res.status(201).json({
            message : "User create succesfully",
            token,
            newUser
        })
    }
   
}

//login user
user.logIn = async (req, res) => {
    const userName = req.body.email;
    const pass = req.body.password;
    //Find user record
    const userLog = await database.user.findOne({
        where:{
            email : userName,
            password : pass
        }
    }).catch(err =>{
        res.status(500).json({
            message: "Error DataBase",
            error : err
        })
    })

    //check response   
    if(!userLog){
        res.status(404).json({
            message : "Email/Password invalid"
        })
    }else{
        res.locals.userPayload = userLog;
        const token = jwt.sign({
            id: userLog.id,
            username: userLog.email,
        }, JWTSing );

        res.status(200).json({
            message : "User LogIn",
            token
        })

    }
}

//Middleware auxiliar function
user.checkEmail= async(req, res,email, next) => {
    //check valid email
    const emailValid = await database.user.findOne({
        where : {
            email : req.body.email
        }
    }).catch(err =>{
        res.status(500).json({
            message :"Error DataBase",
            error : err
        })
    })
    //return if email is used
    if(emailValid){
        return res.status(400).json({
            message: "The email is registered "
        })
    }
}

module.exports = user;