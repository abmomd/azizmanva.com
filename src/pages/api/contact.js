import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,      // e.g., smtp.gmail.com
    port: 587,                        // 465 for SSL, 587 for TLS
    secure: false,                     // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,    // Your email
      pass: process.env.SMTP_PASS,    // Your email password or app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,           // Sender address
      to: process.env.CONTACT_TO_EMAIL,      // Recipient address
      subject: subject,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
