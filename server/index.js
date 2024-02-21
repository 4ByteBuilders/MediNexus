require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send({message: 'Hello World!!'});
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});