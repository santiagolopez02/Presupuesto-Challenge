const database = require("../settingDB/database");
const user = {}
const jwt = require("jsonwebtoken");
const JWTSing = "myPass"
const { validationResult } = require('express-validator')


//create new user
user.createUser = async (req, res)=>{
    const email = req.body.email;
    const body = req.body
    
    //check  error
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error : error.array()});
    }

    //create record
    const newUser = await database.user.create(body)
    .catch(err =>{
        res.status(500).json({
            message : "Error DataBase",
            error : err
        })
    })
    if(newUser){
        //create token
        const token = jwt.sign({
            id: newUser.id,
            username: newUser.email,
        }, JWTSing );
        //send response succesfully
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
    const newUser = await database.user.findOne({
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
    if(!newUser){
        res.status(404).json({
            message : "Email/Password invalid"
        })
    }else{
        res.locals.userPayload = newUser;
        const token = jwt.sign({
            id: newUser.id,
            username: newUser.email,
        }, JWTSing );

        res.status(200).json({
            message : "User LogIn",
            token,
            newUser
        })

    }
}

//Middleware auxiliar function
user.checkEmail= async(req, res, next) => {
    
    //check  error
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error : error.array()});
    }

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
    }else{
        next();
    }
}



module.exports = user;