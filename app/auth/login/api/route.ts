import { LoginValidation } from '@/app/lib/validations/LoginValidation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = LoginValidation.parse(await request.json());
    console.log(email, password);
    return NextResponse.json({ message: 'Login successful' });
  } catch (error: any) {
    return NextResponse.json(JSON.parse(error.message), { status: 400 });
  }
}
