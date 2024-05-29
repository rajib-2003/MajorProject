const express = require('express');
const router = express.Router();
const mongoose = require("mongoose")
require('../models/contactModel');
const nodemailer = require('nodemailer');
const Contact = mongoose.model('Contact');

router.get('/all-contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).send('Error fetching contact information');
    }
});
 router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
  
    const newContact = new Contact({ name, email, message });
  
    try {
      await newContact.save();
      res.status(200).send('Contact information saved successfully');
    } catch (error) {
      res.status(500).send('Error saving contact information');
    }
  });

//   router.post('/send-email', async (req, res) => {
//     const { email, subject, text } = req.body;

//     // Configure the transporter
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         host:'smtp.gmail.com',
//         port:587,
//         secure:false,
//         auth: {
//             user: 'mahatarajib26@gamil.com',
//             pass: 'gqgcfgniczpjihdb'
//         }
//     });

//     const mailOptions = {
//         from: 'mahatarajib26@gamil.com',
//         to: email,
//         subject: subject,
//         text: text
//     };

//     const sendMail = async(transporter,mailOptions)=>{

//         try {
//             await transporter.sendMail(mailOptions);
//             res.status(200).send('Email sent successfully');
//         }  catch (error) {
//             console.error('Error sending email:', error);
//             res.status(500).send('Error sending email: ' + error.message);
//         }
//     }
   
//     sendMail(transporter,mailOptions);
// });

    // const auth = nodemailer.createTransport({
    //     service: "gmail",
    //     secure : true,
    //     port : 465,
    //     auth: {
    //         user: "mahatarajib26@gmail.com",
    //         pass: "kygq gdys mtyr weoe"

    //     }
    // });

    // const receiver = {
    //     from : "mahatarajib26@gmail.com",
    //     to : "mahatoraju9166@gmail.com",
    //     subject : "new accont",
    //     text : "Hello this is a text mail!"
    // };

    // auth.sendMail(receiver, (error, emailResponse) => {
    //     if(error)
    //     throw error;
    //     console.log("success!");
    //     response.end();
    // });
    



  
module.exports = router;
