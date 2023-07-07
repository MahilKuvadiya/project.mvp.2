'use client'

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import AccountCard from 'app/components/accountCard/AccountCard';
import './profile.css';
import { useRouter } from 'next/navigation';
import User from '../../components/User';
import ReactGA from 'react-ga'

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

    ReactGA.event({
      category:'this',
      action:'test',
      label:'try',
      value:'trying'
    })
  }, [session]);

  return (
<div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <div className="container-fluid d-flex justify-content-center">
      <div className="row mt-5" style={{ justifyContent: 'center' }}>
        {isLoading ? (
          <div className="loader"></div> // Display the loader
        ) : (
          <>
            {accounts.length > 0 ? (
              
              accounts.map((account) => <AccountCard key={account.id} account={account} />)
              
            ) : (
              <>
              <h3 className="text-center" style={{color:'white'}}>No Accounts</h3>
              <a className='btn' id='b3' href='/sell'> Sell Account Now</a>
              </>
            )}
          </>
        )}
      </div>
    </div>
    <div>
        <a className='btn' id='b3' href='/sell' style={{fontSize:'3vmin',marginTop:'40px', maxHeight:'65px',alignItems:'center'}}> Sell More Account </a>
        </div>
        </div>
  );
}
