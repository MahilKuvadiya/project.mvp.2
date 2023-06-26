import prisma from '../../libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  const { title, accountName, gameName,priceString, email, description, image,video, specialFeature } = body;
  
  // console.log(priceString)
  const price = parseInt(priceString);
  // console.log(price)

  const exist = await prisma.gamingAccount.findMany({
    where: {
      accountName: accountName,
      gameName: gameName
    }
  });

  if (exist.length !==  0) {
    return NextResponse.json({ error: 'Account already exists.' }, { status: 201 });
  }

  try {
    const gamingAccount = await prisma.gamingAccount.create({
      data: {
        title,
        accountName,
        gameName,
        price,
        email,
        description,
        image,
        video,
        specialFeature
      }
    });
    return NextResponse.json(gamingAccount);
  } catch (error) {
    console.log(error);
    return NextResponse.error('Failed to create gaming account.', { status: 500 });
  }
}