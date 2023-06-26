'use client'
// import Image from 'next/image'
import classes from './page.module.css'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useRouter} from 'next/navigation'
import AccountCard from 'app/components/AccountCard'
// import {useRouter} from 'next/navigation'

export default function Accounts() {
    const [accounts, setAccounts] = useState([]);
    const { data: session } = useSession();
    const [userEmail, setUserEmail] = useState('');
    const anotherSession = useSession()
    const router = useRouter();

    useEffect(() => {
        if (anotherSession?.status === 'unauthenticated') {
           router.push('/') 
        }})

    useEffect(() => {
      async function fetchAccounts() {
        try {
          const data = {
            email: session?.user?.email,
          };
  
          const response = await axios.post('/api/getAccountOfUser', data);
          setAccounts(response.data);
        } catch (error) {
          console.error(error);
        }
      }
  
      if (session?.user?.email) {
        setUserEmail(session.user.email);
        fetchAccounts();
      }
    }, [session]);
  
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row mt-5" style={{justifyContent:'center'}}>
            {accounts?.length > 0 && <h2>WebDevMania&apos;s Blog Website</h2>}
            {accounts.length > 0 ? (
            accounts.map((blog) => <AccountCard key={blog.id} blog={blog} />)
          ) : (
            <h3 className={classes.noBlogs}>No Accounts</h3>
          )}
            </div>
        </div>
    );
  }
  