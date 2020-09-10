const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const trial = require('./routes/try');
const multer = require('multer');

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(multer);
// parse application/json
app.use(bodyParser.json());

app.use('/try', trial);

app.use((req, res, next) => {
    res.send('You are alive');
    next();
});

io.on('connection', socket => {
    console.log('new user connect');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });

});


http.listen(port, () => {
    console.log('You are connected to the port: ', port);
});