const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const port =  process.env.PORT || 3000;

const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Connected to DB');
}).catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});