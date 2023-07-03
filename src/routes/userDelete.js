const { Router } = require('express');
const router = Router();
const userDleteController = require('../controllers/userDeleteController');

router.route('/')
    .post(userDleteController.createUserDelete);

module.exports = router;