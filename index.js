const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Email: ${req.body.email}</li>
                <li>Recruiter: ${req.body.isRecruiter}</li>
            </ul>
            <h3>Message:</h3>
            <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: 'tonewallwebsite@gmail.com',
                pass: 'Tonewall524'
            }
        })

        let mailOptions = {
            from: '${req.body.email}',
            to: 'tonewallwebsite@gmail.com',
            replyTo: '${req.body.email}',
            subject: 'Message From Website',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                return console.log(err);
            }
            window.alert("Message has been sent");
        })

    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('Server listening on port ${PORT}')
})