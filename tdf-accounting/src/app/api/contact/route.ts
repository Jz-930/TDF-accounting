import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side validation can be added here
    // e.g. integrating Resend or Nodemailer to send to info@tdfaccounting.com
    console.log("Received contact form submission:", body);

    // Simulate sending email delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
