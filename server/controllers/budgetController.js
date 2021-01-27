const database =  require("../settingDB/database");
const { validationResult } = require('express-validator')
const budget = {};

//function create record
budget.createRecord = async (req , res) => {
    const loggerUser = res.locals.Payload;

    const bodyRecord = {
        concept: req.body.concept,
        amount: req.body.amount,
        date: req.body.date,
        type: req.body.type,
        userId: loggerUser.id
    }
    //check  error
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error : error.array()});
    }
    
    //create record
    const newBudget = await database.budget.create(bodyRecord).catch(err =>{
        res.status(500).json({
            message :"Error DataBase: create",
            error: err
        })
    })
    //send msg succesfully
    res.status(200).json({
        message: "Record created succesfully",
        newBudget
    })
}

//function delete record
budget.deleteRecord = async (req , res) => {
    const idRecord = req.params.id; //get params id

    //delete record
    const selectRecord = await database.budget.destroy({
        where : {
            id: idRecord
        }
    }).catch(err => {
        res.status(500).json({
            message :"Error DataBase: delete",
            error: err
        })
    });
    //send msg succesfully
    res.status(200).json({
        message: "Record delete succesfully"
    })
}

//fuction change type
budget.typeRecord = async (req , res) => {
    const idRecord = req.params.id;
    const typeChange = req.body.type;

    //check  error
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error : error.array()});
    }
    
    const selectBudget = await database.budget.update({ type: typeChange }, {
        where :{
            id : idRecord
        }
    }).catch(err => {
        res.status(500).json({
            message :"Error DataBase: put",
            error: err
        })
    });
    //send msg succesfully
    res.status(200).json({
        message: "Record modified succesfully",
        selectBudget
    })
}

//function get all record
budget.getRecords = async (req , res) =>{
    //select orden by "date" desc
    const arrayRecords = await database.budget.findAll({
        order: [
            ['date', 'DESC'],
        ]
    }).catch(err => {
        res.status(500).json({
            message :"Error DataBase: select",
            error: err
        })
    });
    //send msg succesfully
    res.status(200).json({
        message: "Array records",
        arrayRecords
    })
}


module.exports = budget //exports module