const expres = require("express");
const router = expres.Router();
const budget = require('../controllers/budgetController');

router.post("/",
    budget.createRegister
);
//
//router.delete("/:id",
//   
//);
//router.get("/",
//  
//);
//router.put('/:id',
// 
//);

module.exports= router;