import prisma from '../../libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const body = await req.json();

    const { skip, gameName, sorting } = body;
    console.log(gameName)
    try {
        if (gameName === '') {
            let data;
            switch (sorting) {
                case 'new':
                    data = await prisma.gamingAccount.findMany({
                        skip: skip,
                        take: 4,
                        orderBy:
                        {
                            createdAt: 'desc',
                        },
                    });
                    break;
                    case 'old':
                    data = await prisma.gamingAccount.findMany({
                        skip: skip,
                        take: 4,
                        orderBy:
                        {
                            createdAt: 'asc',
                        },
                    });
                    break;
                case 'cheap':
                    data = await prisma.gamingAccount.findMany({
                        skip: skip,
                        take: 4,
                        orderBy:
                        {
                            price: 'asc',
                        },
                    });
                    break;
                    case 'premium':
                        data = await prisma.gamingAccount.findMany({
                        skip: skip,
                        take: 4,
                        orderBy:
                        {
                            price: 'desc',
                        },
                    });
                    break;
            }
            if (!data) {
                return NextResponse.json({ error: 'No accounts found' });
            }
            return NextResponse.json(data);
        } else {
            let data;

            switch (sorting) {
                case 'old':
                    data = await prisma.gamingAccount.findMany({
                        skip: skip,
                        take: 4,
                        where: {
                            gameName: gameName
                        },
                        orderBy:
                        {
                            createdAt: 'asc',
                        },
                    });
                    break;
                case 'new':
                    data = await prisma.gamingAccount.findMany({
                        skip: skip,
                        take: 4,
                        where: {
                            gameName: gameName
                        },
                        orderBy:
                        {
                            createdAt: 'desc',
                        },
                    });
                    break;
                case 'cheap':
                    data = await prisma.gamingAccount.findMany({
                        skip: skip,
                        take: 4,
                        where: {
                            gameName: gameName
                        },
                        orderBy:
                        {
                            price: 'asc',
                        },
                    });
                    break;
                case 'premium':
                    data = await prisma.gamingAccount.findMany({
                        skip: skip,
                        take: 4,
                        where: {
                            gameName: gameName
                        },
                        orderBy:
                        {
                            price: 'desc',
                        },
                    });
                    break;
            }

            if (!data) {
                return NextResponse.json({ error: 'No accounts found' });
            }
            return NextResponse.json(data);
        }
    } catch (error) {
        return NextResponse.error(error, { status: 500 });
    }

}
