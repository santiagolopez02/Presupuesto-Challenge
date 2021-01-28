const expres = require("express");
const router = expres.Router();
const budget = require('../controllers/budgetController');
const generalMid = require('../middlewares/authToken')
const { check } = require('express-validator');

//route POST
router.post("/",
    [
        check('concept', 'The concept is required').not().isEmpty(),
        check('amount', 'The amount is required').not().isEmpty(),
        check('date', 'The date is required').not().isEmpty(),
        check('type', 'The type is required').not().isEmpty(),
    ],
    generalMid.validateToken,
    budget.createRecord
);
//route DELETE
router.delete("/:id",
  generalMid.validateToken,
  budget.deleteRecord
);
//route GET
router.get("/",
    generalMid.validateToken,
    budget.getRecords
);
router.put('/:id',
    [
        check('type', 'The type is required').not().isEmpty(),
    ],
    generalMid.validateToken,
    budget.typeRecord
);

module.exports= router;