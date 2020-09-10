const {tryController} = require('../controllers/try-controller');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('You are trying');
});

router.post('/base', tryController)

module.exports = router;