const database =  require ("../settingDB/database");
const budget = {};

//function create register
budget.createRegister = async (req , res) => {
    const newBudget = await database.budget.create(req.body).catch(err =>{
        res.status(500).json({
            message :"Error DataBase",
            error: err
        })
    })

    res.status(200).json({
        message: "Register created succesfully",
        newBudget
    })
}

module.exports = budget;