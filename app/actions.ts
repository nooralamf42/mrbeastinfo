"use server";

import { Resend } from "resend";

const API_KEY = process.env.NEXT_RESEND_API_KEY;

interface EmailData {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  attachment?: {
    content: string;
    filename: string;
  };
}

export const sendMail = async (data: EmailData) => {
  const resend = new Resend(API_KEY);

  try {
    const res = await resend.emails.send({
      from: 'beasgames2025@gmail.com',
      to: 'beast.gamess2025@gmail.com',
      subject: `New Payment Submission`,
      html: `
        <h2>New Contact and Payment Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
      `,
      attachments: data.attachment ? [data.attachment] : undefined,
    });
    console.log(res)
    if(res.data) {
      return { success: true }
    } else return { success: false, error: res.error?.message };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};


