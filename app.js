const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const ordersRoutes = require('./routes/ordersRoutes');
const filesRoutes = require('./routes/filesRoutes');
const cartRoutes = require('./routes/cartRoutes');
const homeRoutes = require('./routes/homeRoutes');

const app = express();

app.use(cors({
    origin: ['https://userapp-frontend.vercel.app', 'https://pinpaper.in'], // Array for multiple origins
    methods: ['GET', 'POST', 'PUT', 'PATCH'],
    credentials: true // allows cookies for auth
}));

app.use(morgan('dev'));
app.use(express.json({ limit: '100kb' }));
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', homeRoutes);
app.use('/api/v1/orders', ordersRoutes);
app.use('/api/v1/files', filesRoutes);
app.use('/api/v1/cart', cartRoutes);

module.exports = app;
