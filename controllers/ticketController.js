const Ticket = require('../models/Ticket');
const Bus = require('../models/Bus');

// Book a ticket function (Normal user)
exports.bookTicket = async (req, res) => {
    const { userId, busId, seatNumber } = req.body;

    try {
        const bus = await Bus.findById(busId);

        if (!bus || seatNumber > bus.totalSeats || seatNumber <= bus.totalSeats - bus.availableSeats) {
            return res.status(400).json({ message: 'Invalid seat number or no available seats' });
        }

        const ticket = new Ticket({ userId, busId, seatNumber });

        await ticket.save();

        // Update available seats in the bus model.
        bus.availableSeats -= 1;

        await bus.save();

        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({ error });
    }
};