const express = require('express');
const businessController = require('../controllers/businessController');

const router = express.Router();

router.post('/settings', businessController.updateSettings);
router.get('/settings', businessController.getSettings);

module.exports = router;
