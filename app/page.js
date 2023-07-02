'use client'

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import AccountCard from 'app/components/accountCard/AccountCard';
import classes from './page.module.css';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [gameName, setGameName] = useState('');
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  const [visibleAccounts, setVisibleAccounts] = useState(4);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isThereAnyMoreAccounts, setIsThereAnyMoreAccounts] = useState(true)

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
      if (res.data.length === 0) {
        setIsThereAnyMoreAccounts(false)
      }
      setAccounts((accounts) => accounts.concat(res.data));
    } catch (error) {
      console.error('Error fetching accounts:', error);
    } finally {
      setIsLoadingMore(false);
    }
  }

  const accountFilter = () => {
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
  const targetRef = useRef();

  return (



    <>


      <div id="mainDiv">
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"/> */}
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script> */}

        <div class="container" id="logo">
          <img class="my-logo desktop-logo" src="assets/components-logo.png" alt="Desktop logo" />
          <img class="my-logo tab-logo" src="assets/components-logo-mobile.png" alt="Tablate logo" />
          <img class="my-logo mobile-logo" src="assets/components-logo-mobile.png" alt="Mobile logo" />
        </div>
        <div class="container" id="component">

          <img class="my-img desktop-img" src="assets/components-imaes.png" alt="Desktop Image" />
          <img class="my-img mobile-img" src="assets/components-images-mobile.png" alt="Mobile Image" />

        </div>
        <div class="bottom">
          <p class="text">
            Discover a world of gaming greatness through our platform, where gamers connect, exchange, and
            conquer together.
            Seamlessly trade game accounts and unlock a wealth of thrilling experiences. Embrace the power of
            community as you journey towards gaming victory.

          </p>
          <div class="btn-group" id="btn" role="group" aria-label="Basic example">

            <a class="btn" id='b1' role='button' onClick={() => targetRef.current.scrollIntoView({ behavior: "smooth" })}>BUY</a>


            <a class="btn" id='b2' role='button' href='./sell'>SELL</a>

          </div>
        </div>

      </div>





      <div ref={targetRef} className="container-fluid d-flex justify-content-center">
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
            <button className='btn' id='b3' onClick={accountFilter}>Filter</button>
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
              ) : (visibleAccounts === accounts.length ? (
                <button className="btn" id='b3' onClick={handleSeeMore}>
                  See More
                </button>


              ) : null)}
          {!isThereAnyMoreAccounts ? (
            <div className={classes.noMoreAccounts}>That's all we have!!!</div>
          ) : null}
        </>
        ) : (
        <h3 className={classes.noBlogs}>No Accounts</h3>
          )}
      </div>
    </div >

    </>
  );
}
