import prisma from '../../libs/prismadb'
// import { useSession } from "next-auth/react";
import { NextResponse } from 'next/server'

var userEmailVar;

export async function PUT(request) {
  
const body = await request.json();

const { email , phoneNumber , gamingName } = body;

userEmailVar = email;
console.log(userEmailVar)
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

// export async function userEmail(){
//     var email =  userEmailVar;
//     console.log(userEmailVar)
//     return email;
// }
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

