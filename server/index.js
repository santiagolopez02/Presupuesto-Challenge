const express = require('express');
const server = express();
const body_parser = require('body-parser');
const database = require('./settingDB/database');

//conexion path
const budget = require('./path/budgetPath');
const user = require('./path/userPath');


//Endopint api
server.use(body_parser.json());
server.use("/budget", budget);
server.use("/user", user)

//conexion DataBase
database.sequelize.authenticate().then(() => {
    server.listen(3000, () => {
        console.log("DataBase Connect");
    });
})
.catch(err =>{
    console.log("No connect", err);
})

