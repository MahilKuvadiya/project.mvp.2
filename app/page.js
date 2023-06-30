'use client'
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import AccountCard from 'app/components/accountCard/AccountCard';
import classes from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    async function fetchAccounts() {
      try {
        const res = await axios.get('/api/getAllAccounts');
        setAccounts(res.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }finally{
        setIsLoading(false); // Set loading state to false in case of an error
      }
    }

    fetchAccounts();
  }, []);
  useEffect(() => {
    const message = document.querySelector('.dancing-message');
    setTimeout(() => {
        message.style.display = 'none';
    }, 10000);
  });

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row mt-5" style={{ justifyContent: 'center' }}>
        {isLoading ? (
          <div className={classes.loader}></div> // Display the loader
          ) : accounts.length > 0 ? (
          <>
            {accounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </>
        ) : (
          <h3 className={classes.noBlogs}>No Accounts</h3>
        )}
      </div>
        {session?.user?(
                    <div class="dancing-message"><span className='arrow'></span>Complete Your Profile</div>
                                ):(
                                    <div class="dancing-message"><span className='arrow' style={{left:'0.55em'}}></span>Sign In Here</div>
                                    )}
    </div>
  );
}
