const { Router } = require('express');
const router = Router();
const sourcesController = require('../controllers/sourcesController');

router.route('/').get(sourcesController.getSources).post( sourcesController.createSource);

router.delete('/:id', sourcesController.deleteSorce);

router.post('/uploads', sourcesController.saveSource);

module.exports = router;