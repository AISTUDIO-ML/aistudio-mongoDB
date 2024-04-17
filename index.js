require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');

const app = express();
if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://cloud:0YsOYJne8WL2aTBJ@serverlessinstance0.cys2vnq.mongodb.net/aistudio?retryWrites=true&w=majority&appName=ServerlessInstance0"

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRoutes);

// MongoDB Connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
