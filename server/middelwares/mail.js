const nodemailer = require('nodemailer');
const User = require('../model/schema/user');
const bcrypt = require('bcrypt');

// Function to send an email
const sendEmail = async (to, subject, text) => {
    try {
        if (to) {

            // Create a transporter using the SMTP settings for Outlook
            const transporter = nodemailer.createTransport({

                host: process.env.MAIL_HOST,

                port: process.env.MAIL_PORT,

                auth: {
                    user: process.env.MAIL_USER_EMAIL,

                    pass: process.env.MAIL_USER_PASSWORD,
                }
            });

            const mailOptions = {

                from: process.env.MAIL_USER_EMAIL,
                
                to: to,
                subject: subject,
                text: text
            };

            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
            return info.response;
        }
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
};


module.exports = { sendEmail }