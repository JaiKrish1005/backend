const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const authMiddleware = require('../middleware/authMiddleware');

// Protect this route for Normal users only.
router.post('/', authMiddleware , ticketController.bookTicket); // Normal user route to book a ticket.

module.exports = router;