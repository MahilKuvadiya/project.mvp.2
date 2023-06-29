import prisma from '../../libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET() {
    
    try {
            const data = await prisma.gamingAccount.findMany();
            if (!data) {
                return NextResponse.json({ error: 'No accounts found' });
            }
            return NextResponse.json(data);
        } catch (error) {
            return NextResponse.error(error, { status: 500 });
        }
    
}
