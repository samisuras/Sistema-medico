const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'globalmedictest@gmail.com',
        pass: 'equipoAzul'
    }
});

module.exports = transporter;