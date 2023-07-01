import prisma from '../../libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const body = await req.json();

    const { skip,gameName } = body;
    // console.log(skip)
    try {
        if(gameName === ''){
            const data = await prisma.gamingAccount.findMany({
                skip : skip,
                take : 4
            });
            if (!data) {
                return NextResponse.json({ error: 'No accounts found' });
            }
            return NextResponse.json(data);
        }else{
     
            const data = await prisma.gamingAccount.findMany({
                skip : skip,
                take : 4,
                where : {
                    gameName : gameName
                }
            });
            if (!data) {
                return NextResponse.json({ error: 'No accounts found' });
            }
            return NextResponse.json(data);
        }
        } catch (error) {
            return NextResponse.error(error, { status: 500 });
        }
    
}
