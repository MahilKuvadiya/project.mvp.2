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
  const [isLoading, setIsLoading] = useState(true);
  const [gameName, setGameName] = useState('');
  const [filteredAccounts, setFilteredAccounts] = useState([]);


  useEffect(() => {
    async function fetchAccounts() {
      try {
        const res = await axios.get('/api/getAllAccounts');
        setAccounts(res.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAccounts();
  }, []);

  useEffect(() => {
    if (gameName === '') {
      setFilteredAccounts(accounts); // Set filtered accounts to all accounts when gameName is empty
    } else {
      const temp = accounts.filter((account) => account.gameName === gameName);
      setFilteredAccounts(temp);
    }
  }, [gameName, accounts]);

  useEffect(() => {
    const message = document.querySelector('.dancing-message');
    setTimeout(() => {
      message.style.display = 'none';
    }, 10000);
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row mt-5" style={{ justifyContent: 'center' }}>
        <div className={classes.dropdownContainer}>
          <select
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            className={classes.dropdown}
          >
            <option value="">All Games</option>
            <option value="Asphalt 9">Asphalt 9</option>
            <option value="Valorent">Valorent</option>
            <option value="Clash Royal">Clash Royal</option>
            <option value="Clash Of Clans">Clash Of Clans</option>
            <option value="BGMI">BGMI</option>
          </select>
          <span className={classes.dropdownArrow}></span>
        </div>
        {isLoading ? (
          <div className={classes.loader}></div>
        ) : filteredAccounts.length > 0 ? (
          <>
            {filteredAccounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </>
        ) : (
          <h3 className={classes.noBlogs}>No Accounts</h3>
        )}
      </div>
        {/* {session?.user?(
                    <div class="dancing-message"><span className='arrow'></span>Complete Your Profile</div>
                                ):(
                                    <div class="dancing-message"><span className='arrow' style={{left:'0.55em'}}></span>Sign In Here</div>
                                    )} */}
    </div>
  );
}
