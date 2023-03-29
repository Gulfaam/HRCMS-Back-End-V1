import express from "express"
import nodemailer from "nodemailer"



//*using simple functions
function generator() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    //by using the padStart we'rea making sure that it'll have the 6 digits code
    const otp = randomNumber.toString().padStart(6, '0');
    const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'emerson.ebert@ethereal.email',
        pass: 'QNFN4vFS1Eg7vgMJCj'
    }
  });

  const mailOptions = {
    from: 'sameer.ijaz100@gmail.com',
    to: 'emerson.ebert@ethereal.email',
    subject: 'OTP Verification',
    text: `Your OTP for verification is ${otp}.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send(`OTP sent to ${mailOptions.to}`);
    }
  });
  console.log(otp);
return otp;
}
export default generator;