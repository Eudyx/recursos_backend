const { Router } = require('express');
const router = Router();
const sourceDeleteController = require('../controllers/sourceDeleteController');

router.route('/')
    .post(sourceDeleteController.createSourceDelete);

module.exports = router;