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

import React from 'react'
import { useSession } from 'next-auth/react'
import User from './components/User'
import PhoneSignUp from './phoneSignUp';
import phoneSignUp from './phoneSignUp';
import './pag123.css'
// import Buy from './page'

export default function page() {
  // const { data: session } = useSession()
  return (
    <>
    
{/* <User></User> */}

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
                    <button type="button" id="btnMrg">
                    <a class="btn" role='button' href='./Buy'>BUY</a>
                    </button>
                    <button type='button'>
                    <a class="btn" role='button' href='./sell'>SELL</a>
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row',marginInline:'104px',marginTop:'40px',marginBottom:'40px' }}>
                <div><img class="list-image" src="assets/m.jpg" alt="Item Image" height="172px" width="294px" /></div>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <div>
                            <div><p>User_Name</p></div>
                            <div><p>User_id</p></div>
                        </div>
                        <div>
                            
                            <div><p>$5000</p></div>
                            <div><p>Rating</p></div>

                        </div>
                        <div><button>BUY</button></div>
                    </div>
                    <div>
                        <p class="containe">
                            Discover a world of gaming greatness through our platform, where gamers connect, exchange, and
                            conquer together.
                            Seamlessly trade game accounts and unlock a wealth of thrilling experiences. Embrace the power of
                            community as you journey towards gaming victory.
                        </p>
                    </div>
                </div>
            </div>
        </div>


</>
  )
}
