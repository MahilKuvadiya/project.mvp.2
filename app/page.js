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
  const [visibleAccounts, setVisibleAccounts] = useState(4);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isThereAnyMoreAccounts,setIsThereAnyMoreAccounts] = useState(true)

  useEffect(() => {
    async function fetchAccounts() {
      try {
        const data = {
          skip: 0,
          gameName: ''
        }
        const res = await axios.post('/api/getAllAccounts', data);
        setAccounts(res.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAccounts();
  }, []);

  async function fetchMoreAccounts() {
    try {
      setIsLoadingMore(true);
      const data = {
        skip: visibleAccounts,
        gameName: gameName
      }
      const res = await axios.post('/api/getAllAccounts', data);
      if(res.data.length === 0){
        setIsThereAnyMoreAccounts(false)
      }
      setAccounts((accounts) => accounts.concat(res.data));
    } catch (error) {
      console.error('Error fetching accounts:', error);
    } finally {
      setIsLoadingMore(false);
    }
  }

  const accountFilter= ()=> {
    setAccounts([])
    setVisibleAccounts(4)
    setIsLoading(true)
    async function fetchAccounts() {
      try {
        const data = {
          skip: 0,
          gameName: gameName
        }
        const res = await axios.post('/api/getAllAccounts', data);
        setAccounts(res.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAccounts();  
  }

  const handleSeeMore = () => {
    setVisibleAccounts((prevVisibleAccounts) => prevVisibleAccounts + 4);
    console.log(visibleAccounts)
    fetchMoreAccounts()
    console.log(accounts.length)

    if (visibleAccounts + 4 === accounts.length) {
      setIsThereAnyMoreAccounts(false);
    }
  };

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
          <button onClick={accountFilter}>filter</button>
        </div>
        {isLoading ? (
          <div className={classes.loader}></div>
        ) : accounts.length > 0 ? (
          <>
            {accounts.slice(0, visibleAccounts).map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
            {isLoadingMore ? (
              <div className={classes.loader}></div>
            ) : (visibleAccounts  === accounts.length ? (
              <button className={classes.seeMoreButton} onClick={handleSeeMore}>
                See More
              </button>
              
            ) : null)}
            {!isThereAnyMoreAccounts ? (
              <div className={classes.noMoreAccounts}>That's all we have!!!</div>
            ): null}
          </>
        ) : (
          <h3 className={classes.noBlogs}>No Accounts</h3>
        )}
      </div>
    </div>
  );
}
