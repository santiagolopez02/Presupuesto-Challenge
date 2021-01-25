const bcrypt = require('bcryptjs');
let moment = require('moment'); // require
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
        get() {
            return moment(this.getDataValue('date')).format('DD/MM/YYYY');
        },
        allowNull: false
    },
    type:{
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['income', 'expenses']
    }
},{ freezeTableName: true , timestamps: false});


//create schema user
const user = sequelize.define("user", {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
    //instanceMethods: {
    //    generateHash(password) {
    //        return bcrypt.hash(password, bcrypt.genSaltSync(8));
    //    },
    //    validPassword(password) {
    //        return bcrypt.compare(password, this.password);
    //    }
    //}
})


//relationship
budget.belongsTo(user, {foreignKey: 'userId'});

//export modules
module.exports= {
    sequelize,
    budget,
    user
};