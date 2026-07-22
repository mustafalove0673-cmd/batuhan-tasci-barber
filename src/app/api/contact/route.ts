import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'ad ve mesaj gereklidir' }, { status: 400 });
    }

    await db.contactMessage.create({
      data: {
        name: name.trim(),
        message: message.trim(),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('contact form error:', error);
    return NextResponse.json({ error: 'bir hata oluştu' }, { status: 500 });
  }
}
