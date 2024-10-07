const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

app.use('/api/users', userRoutes);
app.use('/api/buses', busRoutes);
app.use('/api/tickets', ticketRoutes);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));