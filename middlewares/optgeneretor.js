// import {} from "dotenv/config";
import nodemailer from "nodemailer"
// import config from "/config/index"
export default (req, res, next) => {
  var { email} = req.body;
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'misael.torphy@ethereal.email',
          pass: 'TR4pkvfuXCPBK5hYHF'
      }
  });

    const randomNumber = Math.floor(Math.random() * 1000000);
    //*by using the padStart we're making sure that it'll have the 6 digits code 
    const otp = randomNumber.toString().padStart(6, '0');
    const mailOptions = {
      from:process.env.email,
      to:email,
      subject: 'Your OTP',
      text: `Your OTP is ${otp}`
    }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send(error);
    } else {
      console.log('Email sent: ' + info.response);
      req.OTP = otp;
      next();
    }
  });
}


