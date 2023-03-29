import nodemailer from 'nodemailer';
import otpGenerator from 'otp-generator';

const transporterFun = (email) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'estrella.becker48@ethereal.email',
            pass: 'v9dnuD5DPQzmw8Zga2'
        }
    });

    const OTP = otpGenerator.generate(6, { alphabets: false, upperCase: false, specialChars: false, Number: true });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP code is ${OTP}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    });
}

export default transporterFun