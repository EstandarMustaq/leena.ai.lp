import { NextResponse } from 'next/server';

export async function GET() {
  const number = process.env.WHATSAPP_NUMBER;

  if (!number) {
    return NextResponse.json({ error: 'WHATSAPP_NUMBER não definido' }, { status: 500 });
  }

  return NextResponse.redirect(`https://wa.me/${number}`);
}
