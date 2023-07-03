const { Router } = require('express');
const router = Router();
const sourceDleteController = require('../controllers/userDeleteController');

router.route('/')
    .post(sourceDleteController.createUserDelete);

module.exports = router;