const express = require('express');
const calendarController = require('../controllers/calendarController');

const router = express.Router();

router.get('/availability', calendarController.checkAvailability);

module.exports = router;
