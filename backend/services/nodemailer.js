import nodemailer from "nodemailer"
import dotenv from "dotenv";



dotenv.config();

const transporter = nodemailer.createTransport({
  host: "eitm.gmail.com",
  port: 587,
  service:"gmail",// Use `true` for port 465, `false` for all other ports
  secure: true, 
  auth: {
    user: process.env.NODEMAILER_AUTH_USER,
    pass: process.env.NODEMAILER_AUTH_PASS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
 async function sendVerificationEmail(email, generated_otp,fullName) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'janisarhasnain@gmail.com', // sender address
    to: email, // list of receivers
    subject: "Otp verification", // Subject line
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OTP Email Template</title>
        <style>
            /* Reset CSS */
            body, html {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
            }
            /* Container styles */
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            /* Header styles */
            .header {
                text-align: center;
                padding-bottom: 20px;
            }
            .header h1 {
                color: #008000; /* Green color */
            }
            /* Content styles */
            .content {
                padding: 20px;
            }
            .content p {
                color: #666666;
                line-height: 1.6;
            }
            .otp {
                font-size: 24px;
                font-weight: bold;
                text-align: center;
                padding: 20px 0;
                background-color: #f0f0f0;
                border-radius: 8px;
                margin-bottom: 20px;
            }
            /* Footer styles */
            .footer {
                text-align: center;
                margin-top: 20px;
                color: #999999;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>OTP Verification</h1>
            </div>
            <div class="content">
                <p>Hello, ${fullName}</p>
                <p>Your OTP (One Time Password) for verification is:</p>
                <div class="otp">${generated_otp}</div>
                <p>Please use this OTP to complete your verification process.</p>
            </div>
            <div class="footer">
                <p>This is an automated email. Please do not reply.</p>
            </div>
        </div>
    </body>
    </html>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

export default sendVerificationEmail
