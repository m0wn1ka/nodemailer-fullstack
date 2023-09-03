
const nodemailer = require('nodemailer');
const express=require('express')
const router=express.Router();;
const to_addr_file=require("./toaddr.json")
const data = require('../../config/default.json');
const secret = data.secret_mail;

// Create a route to handle email sending
router.post('/', async (req, res) => {
  console.log("got request form frontened,i am from send mail of backedn")
  const { to, subject, text } = req.body;
  // console.log("at line1 of sendmail req.body is ",req.body.to)
  // console.log("data is fromline1 of sendmainl is ",to,subject,text)
  // Create a Nodemailer transporter
  const mypass=secret
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'm0wn1ka0001@gmail.com',
      pass: mypass,
    },
  });
  
  const to_addr=to_addr_file.mails
  const mailOptions = {
    from: 'm0wn1ka0001@gmail.com',
    to:to_addr,
    subject:"a test mail",
    text:"fill the form for testig purpose,copy the link and open in browser,https://forms.gle/PoPgR2b3R2mYJZt26 ",
  };

  try {
    // Send the email
    console.log("in try block of send mail mail options are",mailOptions)
    const result=await transporter.sendMail(mailOptions);
    // console.log(req.body)
    console.log("restul is from send mail is ",result)
    

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.log("req nody is",req.body)
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports=router;
