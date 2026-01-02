import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { navn, epost, telefon, type, melding } = body;

    // Validering
    if (!navn || !epost || !type || !melding) {
      return NextResponse.json(
        { error: 'Vennligst fyll ut alle påkrevde felt' },
        { status: 400 }
      );
    }

    // SMTP transport - One.com med SSL
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for port 465 (SSL)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-postinnhold
    const mailOptions = {
      from: `"Jannikes.no Kontaktskjema" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: epost,
      subject: `Ny forespørsel: ${type}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3E2723; border-bottom: 2px solid #E91E63; padding-bottom: 10px;">
            Ny forespørsel fra jannikes.no
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background: #f9f9f9; font-weight: bold; width: 140px;">Navn:</td>
              <td style="padding: 10px; background: #f9f9f9;">${navn}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">E-post:</td>
              <td style="padding: 10px;"><a href="mailto:${epost}">${epost}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f9f9f9; font-weight: bold;">Telefon:</td>
              <td style="padding: 10px; background: #f9f9f9;">${telefon || 'Ikke oppgitt'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Type:</td>
              <td style="padding: 10px;">${type}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background: #f0f9f6; border-left: 4px solid #A8D5BA;">
            <h3 style="margin: 0 0 10px 0; color: #3E2723;">Melding:</h3>
            <p style="margin: 0; white-space: pre-wrap;">${melding}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 12px; color: #888;">
            Denne meldingen ble sendt fra kontaktskjemaet på jannikes.no
          </p>
        </div>
      `,
      text: `
Ny forespørsel fra jannikes.no

Navn: ${navn}
E-post: ${epost}
Telefon: ${telefon || 'Ikke oppgitt'}
Type: ${type}

Melding:
${melding}
      `,
    };

    // Send e-post
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('E-postfeil:', error);
    return NextResponse.json(
      { error: 'Kunne ikke sende melding. Prøv igjen senere.' },
      { status: 500 }
    );
  }
}
