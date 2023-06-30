'use client'
import React from 'react';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import axios from 'axios';

const Page = (ctx) => {
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

    fetchAccountInfo();
  }, [session]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const name = account?.email; 
  const phoneNumber = account?.phoneNumber

  const accJSON = JSON.stringify(account)
  return (
    <div>
      {accJSON}
      <p>email: {name}</p>
      <p>phoneNumber: {phoneNumber}</p>
    </div>
  );
};

export default Page;
