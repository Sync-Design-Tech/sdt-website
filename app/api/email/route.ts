import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import {EmailTemplate} from '@/app/api/emailTemplate';
import { address } from 'framer-motion/client';

export async function POST(request: NextRequest) {
  const { email, given_name, family_name, phone, message, type } = await request.json();
  console.log("email", email)
  const emailBody = EmailTemplate( email, given_name, family_name, phone, message, type );

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const {html, attachments, subject, to, info} ={...emailBody}

  if (!process.env.MY_EMAIL) {
    throw new Error('MY_EMAIL environment variable is not defined');
  }

  const sender = {
    name: "Sync Design Tech",
    address: process.env.MY_EMAIL
  }

  const mailOptions: Mail.Options = {
    from: sender,
    to,
    subject,
    // cc: cc,
    html,
    attachments
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}