'use client'
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import AccountCard from 'app/components/AccountCard';
import classes from './profile.css';
import {useRouter} from 'next/navigation'

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const { data: session, status } = useSession();
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const anotherSession = useSession()
  const router = useRouter();

  useEffect(() => {
    if (anotherSession?.status === 'unauthenticated') {
       router.push('/') 
    }
})

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
<>
    <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'></script>
    <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

    <link rel="stylesheet" href="https://cdn.korzh.com/metroui/v4.5.1/css/metro-all.min.css"></link>



    <div className="container-fluid d-flex justify-content-center">
      <div className="row mt-5" style={{ justifyContent: 'center' }}>
        {isLoading ? (
          <div className={classes.loader}></div> // Display the loader
        ) : (
          <>
            {accounts.length > 0}
              {accounts.length > 0 ? (
                accounts.map((blog) => <AccountCard key={blog.id} blog={blog} />)
              ) : (
                <h3 className={classes.noBlogs}>No Accounts</h3>
              )}
            
          </>
        )}
      </div>
    </div>
    </>
  );
}
