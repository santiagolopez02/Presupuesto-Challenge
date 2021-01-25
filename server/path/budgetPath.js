const expres = require("express");
const router = expres.Router();
const budget = require('../controllers/budgetController');
const generalMid = require('../middlewares/authToken')
const { check } = require('express-validator');

//path POST
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
//path DELETE
router.delete("/:id",
  budget.deleteRecord
);
//path GET
router.get("/",
    budget.getRecords
);
router.put('/:id',
    [
        check('type', 'The type is required').not().isEmpty(),
    ],
    budget.typeRecord
);

module.exports= router;