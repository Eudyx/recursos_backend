const { Router } = require('express');
const router = Router();
const userDelteController = require('../controllers/userDeleteController');

router.route('/')
    .post(userDelteController.createUserDelete);

module.exports = router;