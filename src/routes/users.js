const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController');


router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router.delete('/:name', userController.deleteUser)
    
router.get('/:id', userController.getUserById);

module.exports = router;