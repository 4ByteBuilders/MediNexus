require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const httpServer = require('http').createServer(app);
const io = require('socket-io')(httpServer);

const port = process.env.PORT || 3000
httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send({message: 'Hello World!!'});
});