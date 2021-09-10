const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: 'tomasalonso2009@hotmail.com',
    subject: '',
    text: ''
}

module.exports = { transporter, mailOptions };