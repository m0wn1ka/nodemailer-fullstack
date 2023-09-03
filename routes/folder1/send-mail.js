
const nodemailer = require('nodemailer');
const express=require('express')
const router=express.Router();;


// Create a route to handle email sending
router.post('/', async (req, res) => {
  console.log("got request form frontened,i am from send mail of backedn")
  const { to, subject, text } = req.body;
  console.log("at line1 of sendmail req.body is ",req.body.to)
  console.log("data is fromline1 of sendmainl is ",to,subject,text)
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'm0wn1ka0001@gmail.com',
      pass: 'crfezqehsaxmvvbc',
    },
  });

  const mailOptions = {
    from: 'm0wn1ka0001@gmail.com',
    to:"radhamouni.p@gmail.com",
    subject:"subjectt2",
    text:"text2",
  };

  try {
    // Send the email
    console.log("in try block of send mail mail options are",mailOptions)
    const result=await transporter.sendMail(mailOptions);
    console.log(req.body)
    console.log("restul is from send mail is ",result)
    

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.log("req nody is",req.body)
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports=router;
