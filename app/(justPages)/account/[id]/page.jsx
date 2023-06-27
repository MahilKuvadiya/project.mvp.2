'use client'

import React from 'react'
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import axios from 'axios';
const page = (ctx) => {

    const { data: session, status } = useSession();
    const [account, setAccount] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchAccountInfo() {
          try {
            const data = {
              id: ctx.params.id,
            };
    
            const response = await axios.post('/api/getParticularAccount', data);
            setAccount(response.data);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        }
    
        // if (session?.user?.email) {
        //   setUserEmail(session.user.email);
        // }
        fetchAccountInfo();
    }, [session]);
 const accountJSON = JSON.stringify(account)
    return (
    <div>{accountJSON}</div>
  )
}

export default page