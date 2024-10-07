const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const Bus = require('./models/Bus');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');

        // Seed Users and Buses here.

        // Example Users:
        const usersData = [
            { username: 'admin', password: 'admin123', role: 'admin' },
            { username: 'user1', password: 'user123', role: 'user' },
            { username: 'user2', password: 'user123', role: 'user' },
        ];

        // Example Buses:
        const busesData = [
            { name: 'Express Bus', totalSeats: 50, availableSeats: 50, details: 'Comfortable seats with AC.' },
            { name: 'Luxury Coach', totalSeats: 40, availableSeats: 40, details: 'Luxury seating with refreshments.' },
            { name: 'Standard Bus', totalSeats: 60, availableSeats: 60, details: 'Standard seating arrangement.' },
        ];

        // Insert Users into DB.
        await User.deleteMany({});
        await User.insertMany(usersData);

        // Insert Buses into DB.
        await Bus.deleteMany({});
        await Bus.insertMany(busesData);

        console.log('Database seeded!');

    } catch (error) {
        console.error(error.message);
    } finally {
        mongoose.connection.close();
    }
};

connectDB().then(() => console.log("Seeding completed."));