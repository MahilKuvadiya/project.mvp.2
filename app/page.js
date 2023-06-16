"use client";

import React from 'react'
import { useSession } from 'next-auth/react'
import User from './components/User'
const page = () => {
  const { data: session } = useSession()
  return (

    <>
    
    <User/>
    
    </>
  )
}

export default page