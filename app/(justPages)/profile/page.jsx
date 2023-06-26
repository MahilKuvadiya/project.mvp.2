'use client'

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import AccountCard from 'app/components/AccountCard';
import classes from './page.module.css';

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const { data: session, status } = useSession();
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
      } finally {
        setIsLoading(false);
      }
    }

    if (session?.user?.email) {
      setUserEmail(session.user.email);
      fetchAccounts();
    }
  }, [session]);

  return (



    <div className="container-fluid d-flex justify-content-center">
      <div className="row mt-5" style={{ justifyContent: 'center' }}>
        {isLoading ? (
          <div className={classes.loader}></div> // Display the loader
        ) : (
          <>
            {accounts.length > 0 && <h2>WebDevMania&apos;s Blog Website</h2>}
            <div className={classes.wrapper}>
              {accounts.length > 0 ? (
                accounts.map((blog) => <AccountCard key={blog.id} blog={blog} />)
              ) : (
                <h3 className={classes.noBlogs}>No Accounts</h3>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
