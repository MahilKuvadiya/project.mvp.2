import prisma from '../../libs/prismadb'
import { useSession } from "next-auth/react";
import { NextResponse } from 'next/server'
export async function PUT(request) {
  
const body = await request.json();
const { email , phoneNumber , gamingName } = body;


  const user = await prisma.user.update({
    where : {
        email : email
    },
    data : {
        phoneNumber : phoneNumber,
        gamingName : gamingName
    }
});
return NextResponse.json(user)
}


//   export const updateduser = await client.user.update({
//     where : {
//         email : "mahilpatel6858@gmail.com"
//     },
//     data:{
//         phoneNumber : "12347890"
//     }
//   });

//   updateduser().then(console.log("user updated"));
//   console.log(session?.user?.email);

