import nodemailer from 'nodemailer';
import otpGenerator from 'otp-generator';

const transporterFun = (email) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'garett.mccullough63@ethereal.email',
            pass: 'a4N2gM78EmtAEB39T1'
        }
    });

    const OTP = otpGenerator.generate(6, { alphabets: false, upperCase: false, specialChars: false, Number: true });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP code is ${OTP}`
    };
    transporter.sendMail(mailOptions)
}

export default transporterFun