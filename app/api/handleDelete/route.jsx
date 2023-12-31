import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'


export async function POST(request) {
    const body = await request.json();

    const { id } = body;
    // console.log(email)
  try {
    const data = await prisma.gamingAccount.delete({
      where: { 
        id : id
       },
    });

    // console.log(email)
    if (!data) {
      return NextResponse.sendStatus(404);
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error(error, { status: 500 });
  }
}