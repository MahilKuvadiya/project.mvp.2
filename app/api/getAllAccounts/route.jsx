import prisma from '../../libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const body = await req.json();

    const { skip, gameName, sorting } = body;
    // console.log(skip)
    try {
        if (gameName === '') {
            const data = await prisma.gamingAccount.findMany({
                skip: skip,
                take: 4,
                orderBy:
                {
                    createdAt: sorting,
                },
            });
            if (!data) {
                return NextResponse.json({ error: 'No accounts found' });
            }
            return NextResponse.json(data);
        } else {

            const data = await prisma.gamingAccount.findMany({
                skip: skip,
                take: 4,
                where: {
                    gameName: gameName
                },
                orderBy:
                {
                    createdAt: sorting,
                },
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
