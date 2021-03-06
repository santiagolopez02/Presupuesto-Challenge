const express = require('express');
const server = express();
const body_parser = require('body-parser');
const database = require('./settingDB/database');
const cors = require('cors')

//conexion path
const budget = require('./route/budgetPath');
const user = require('./route/userPath');

//CORS
server.use(cors());

//Endopint api
server.use(body_parser.json());
server.use("/budget", budget);
server.use("/user", user)

//conexion DataBase
database.sequelize.authenticate().then(() => {
    server.listen(4000, () => {
        console.log("DataBase Connect");
    });
})
.catch(err =>{
    console.log("No connect", err);
})

