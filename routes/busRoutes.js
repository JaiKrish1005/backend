const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');
const authMiddleware = require('../middleware/authMiddleware');

// Protect this route for Admin only.
router.post('/', authMiddleware, busController.createBus); // Admin only route to create a bus.
router.get('/', busController.getAllBuses);

module.exports = router;