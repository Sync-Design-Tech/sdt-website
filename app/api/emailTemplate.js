const createCustomerEmail = (given_name) => {
  return `
  <html>
  <head>
      <style>
          body {
              font-family: sans-serif;
          }
          .header {
              background-color: #22343e;
              height: 80px;
              padding-left: 80px;
              margin-bottom: 40px;
          }
          .logo {
              height: 80px;
          }
          .email-content {
              padding-bottom: 40px;
          }
          .message-box {
              padding: 0 80px 0 20px;
          }
          .do-not-reply {
              padding-top: 50px;
              text-align: center;
          }
      </style>
  </head>
  <body>
      <div class="email-content">
          <div>
              <p>Hi ${given_name},</p>
              <p>Thank you for reaching out to us. We appreciate your interest and will get back to you shortly.</p>
              <p>Best regards,</p>
          </div>
      </div>
  </body>
  </html>
  `;
};

const createInternalEmail = (content, emailSubject) => {
  return `
  <html>
  <head>
      <style>
          body {
              font-family: sans-serif;
          }
          .header {
              background-color: #22343e;
              height: 80px;
              padding-left: 80px;
              margin-bottom: 40px;
          }
          .logo {
              height: 80px;
          }
          .email-content {
              padding-bottom: 40px;
          }
          .message-box {
              padding: 0 20px 0 20px;
          }
          .do-not-reply {
              padding-top: 50px;
              text-align: center;
          }
      </style>
  </head>
  <body>
      <div class="email-content">
          <div>
              <p>Hello,</p>
              <p>You have received a new <b>${emailSubject}</b> via our online inquiry form.</p>
              <p>Please find the details below for your review and follow-up.</p>
          </div>
          <div>
              ${content}
          </div>
      </div>
  </body>
  </html>
  `;
};

const ContactUs = (email, given_name, family_name, phone, message) => {
  const displayData = [
    { label: "Name", value: given_name },
    { label: "Family Name", value: family_name },
    { label: "Phone Number", value: phone },
    { label: "Email", value: email },
  ];

  const emailContent = `
  <div>
  ${displayData.map(elem => elem.value ? `
  <p class="">
  ${elem.label}: ${elem.value}
  </p>
  ` : '').join('')}
  <p>Message: </p>
  <div class="message-box">
  ${message}
  </div>
  </div>
  `;

  return emailContent;
};

const EmailTemplate = (email, given_name, family_name, phone, message, type) => {
  let content = ContactUs(email, given_name, family_name, phone, message);
  let emailSubject = "Contact request";

  let emailBodies = type === "confirmation" ? 
  {
    subject: `Thank you for your contact request`,
    html: createCustomerEmail(given_name),
    attachments: [],
    to: email,
    info: { type: "confirmation", email }
  } : 
  {
    subject: emailSubject,
    html: createInternalEmail(content, emailSubject),
    attachments: [],
    to: process.env.MY_EMAIL,
    info: { type, email }
  };
  return emailBodies;
};

module.exports = { EmailTemplate, ContactUs };
