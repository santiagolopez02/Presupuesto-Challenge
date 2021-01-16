const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('budget/challenge', "root","",{
    host: "localhost",
    dialect: "mysql",
    logging: (msg) => console.log(msg),
    typeValidation:true
});

sequelize.sync({
    force: false
});

//create schema budget
const budget = sequelize.define("budget" , {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    concept:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    amount:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    date:{
        type: Sequelize.DATE,
        allowNull: false
    },
    type:{
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['income', 'expenses']
    }
},{ freezeTableName: true , timestamps: false});


//export modules
module.exports= {
    sequelize,
    budget
};