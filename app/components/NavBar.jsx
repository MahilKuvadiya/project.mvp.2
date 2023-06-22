"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import Image from "next/image";
import User from './User'

const NavBar = () => {
  const { data: session } = useSession()
  return (
    <>
    {session?.user?(
      <section>
        <button onClick={() => signOut()}>Sign Out</button>
        <User/>
        <a href="/dashboard">
        <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
        />
        </a>
      </section>

    ):(
      <button onClick={() => signIn('google')}>Sign In</button>
    )}
    </>
  )
}

export default NavBar