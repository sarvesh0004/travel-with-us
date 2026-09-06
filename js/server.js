const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../')));

mongoose.connect('mongodb://127.0.0.1:27017/travelWithUs')
.then(() => console.log("✔ Connected to Local MongoDB Database Successfully"))
.catch(err => console.error("❌ Database connection failed:", err));

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    dob: { type: Date },
    gender: { type: String }
});
const User = mongoose.model('User', userSchema);

const bookingSchema = new mongoose.Schema({
    customerName: String,
    email: String,
    packageName: String,
    price: String,
    amount: String,
    peopleCount: Number,
    date: String,
    status: { type: String, default: 'Pending' }
});
const Booking = mongoose.model('Booking', bookingSchema);

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    date: { type: String, default: () => new Date().toLocaleDateString() }
});
const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/auth/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, dob, gender } = req.body;
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(400).json({ message: 'This email address is already registered.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = {
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: hashedPassword,
            phone: phone || undefined,
            gender: gender || undefined
        };
        if (dob && dob.trim() !== "") {
            userData.dob = new Date(dob);
        }
        const newUser = new User(userData);
        await newUser.save();
        res.status(201).json({ message: 'Account created successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const normalizedEmail = email.toLowerCase();
        if (normalizedEmail === 'admin@travelwithus.com' && password === 'admin123') {
            return res.status(200).json({
                message: 'Admin authorization granted.',
                name: 'System Administrator',
                email: 'admin@travelwithus.com',
                isAdmin: true
            });
        }
        const user = await User.findOne({ email: normalizedEmail });
        if (!user) {
            return res.status(400).json({ message: 'Account username not found.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials entered.' });
        }
        res.status(200).json({
            message: 'Login verification successful.',
            name: user.firstName,
            email: user.email,
            isAdmin: false
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/bookings', async (req, res) => {
    try {
        const bookingData = { ...req.body };
        if (bookingData.price && !bookingData.amount) bookingData.amount = bookingData.price;
        if (bookingData.amount && !bookingData.price) bookingData.price = bookingData.amount;
        const newBooking = new Booking(bookingData);
        await newBooking.save();
        res.status(201).json({ message: 'Booking registered successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/bookings', async (req, res) => {
    try {
        const history = await Booking.find().sort({ _id: -1 });
        res.status(200).json(history);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/bookings/history/:email', async (req, res) => {
    try {
        const historyLogs = await Booking.find({ email: req.params.email.toLowerCase() }).sort({ _id: -1 });
        res.status(200).json(historyLogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.put('/api/bookings/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.status(200).json(updatedBooking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/contacts', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Message recorded successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/contacts', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ _id: -1 });
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 TravelWithUs Backend Core running on http://localhost:${PORT}`);
});