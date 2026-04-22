import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, company, role, message } = await req.json();

    if (!firstName || !email) {
      return NextResponse.json({ error: 'First name and email are required.' }, { status: 400 });
    }

    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      INSERT INTO contact_submissions (first_name, last_name, email, company, role, message)
      VALUES (${firstName}, ${lastName ?? ''}, ${email}, ${company ?? ''}, ${role ?? ''}, ${message ?? ''})
    `;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
