const nodeMailer = require("nodemailer");

exports.mailTransport = () =>
  nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER, // generated ethereal user
      pass: process.env.GMAIL_PASSWORD, // generated ethereal password
    },
  });
// const mailOptions = {
//   // from: process.env.SMPT_MAIL,
//   to: options.email,
//   subject: options.subject,
//   text: options.message,
// };

// await transporter.sendMail(mailOptions);
exports.generateOTP = () => {
  let otp = "";
  for (let i = 0; i <= 3; i++) {
    const randVal = Math.round(Math.random() * 9);

    otp = otp + randVal;
  }
  return otp;
};

exports.generateEmailTemplate = (code) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <style>
      @media only screen and (max-width: 620px){
        h1{
          font-size: 20px;
          padding: 5px;
        }
      }
      </style>
    </head>
    <body>
  <div>
    <div style="max-width: 620px; margin:0auto; font-family:
    sans-serif; color: #272727;">
        <h1 style="background: #f6f6f6; padding: 10px; text-align:
        center; color: #272727;">We are delighted to welcome you to our
        team!</h1
        <P>Please Verify Your Email To Continue Your verification code
        is:</p>
        <p style="width: 80px; margin:0auto; font-weight: bold;
        text-align: center; background: #f6f6f6; border-radius: 5px;
        font-size: 25px;">${code}</p>
      </div>
    </div>
  </body>
  </html>`;
};

exports.plainEmailTemplate = (heading, message) => {
  return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <style>
       @media only screen and (max-width: 620px){
          h1{
            font-size: 20px;
            padding: 5px;
          }
        }
        </style>
        </head>
        <body>
        <div>
          <div style="max-width: 620px; margin:0auto; font-family:
          sans-serif; color: #272727;">
              <h1 style="background: #f6f6f6; padding: 10px; text-align:
              center; color: #272727;">${heading}</h1
              <P style="color: #272727; text-align: center;">${message}</p>
            </div>
          </div>
        </body>
        </html>`;
};
