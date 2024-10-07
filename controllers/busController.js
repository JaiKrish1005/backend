const Bus = require('../models/Bus');

// Create a new bus function (Admin only)
exports.createBus = async (req, res) => {
    const { name, totalSeats, availableSeats, details } = req.body;

    try {
        const newBus = new Bus({ name, totalSeats, availableSeats, details });
        await newBus.save();
        res.status(201).json(newBus);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Get all buses function 
exports.getAllBuses = async (req, res) => {
    try {
        const buses = await Bus.find();
        res.json(buses);
    } catch (error) {
        res.status(500).json({ error });
    }
};