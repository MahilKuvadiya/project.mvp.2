'use client'

import axios from 'axios';
import { useSession } from 'next-auth/react';
import { toast } from "react-hot-toast"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function dashboard() {

  const { data:session } = useSession()
  const router = useRouter()
  // console.log(session?.user?.email)
  const anotherSession = useSession()

  // console.log(anotherSession?.status)
  useEffect(() => {
    if (anotherSession?.status === 'unauthenticated') {
       router.push('/') 
    }
})

  // const [email, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gamingName , setGamingName] = useState('');
  

  const handleUpdateData = async () => {
    
      console.log(session?.user?.email)
      console.log(phoneNumber)
      const data = {
        email: session?.user?.email,
        phoneNumber : phoneNumber,
        gamingName : gamingName
      }
      const response = await axios.put('/api/updateUser', data)
      .then(() => toast.success('Your profile is complited.'))
      .catch(() => toast.error('Something went wrong!'));
  };

  return (
    <div>
      <h1>Update Data</h1>
      <input
        type="text"
        placeholder="PhoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="GamingName"
        value={gamingName}
        onChange={(e) => setGamingName(e.target.value)}
      />
      <button onClick={handleUpdateData}>Update</button>

    </div>
  );
}
