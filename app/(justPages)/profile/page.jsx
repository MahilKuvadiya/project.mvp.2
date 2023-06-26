'use client'

// import { blogs } from '@/lib/data'
import Image from 'next/image'
import classes from './page.module.css'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useEffect } from 'react'
import BlogCard from 'app/components/BlogCard'

export default function Accounts() {
    const [accounts, setAccounts] = useState([]);
    const { data: session } = useSession();

    useEffect(() => {
        async function fetchAccounts() {
            try {
                const userEmail = session?.user?.email
                // console.log(userEmail);

                const data = {
                    email: userEmail,
                };

                // console.log(data);

                const response = await axios.post('/api/getAccountOfUser', data);
                setAccounts(response.data);
                // console.log("request sent");
                // toast.success("Data fetched.");
            } catch (error) {
                console.error(error);
            }
        }

        fetchAccounts();
    }, [session]);
    console.log(accounts)
    return (
        <div className={classes.container}>
            {accounts?.length > 0 && <h2>WebDevMania&apos;s Blog Website</h2>}
            <div className={classes.wrapper}>
                {accounts?.length > 0
                    ? 
                       accounts.map((blog) => (
                        <BlogCard key={blog.id} blog={blog}/>
                      )) 
                    : <h3 className={classes.noBlogs}>No Accounts </h3>}
            </div>
        </div>
    )
}

