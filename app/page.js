"use client";

import React from 'react'
import { useSession } from 'next-auth/react'
import User from './components/User'
import PhoneSignUp from './phoneSignUp';
import phoneSignUp from './phoneSignUp';
import './pag123.css'
import {useEffect} from 'react'
import { Tooltip } from '@mui/material';
// import Buy from './page'

export default function page() {
    const { data: session } = useSession()
  // const { data: session } = useSession()
  
  useEffect(() => {
    const message = document.querySelector('.dancing-message');
    setTimeout(() => {
        message.style.display = 'none';
    }, 10000);
  });
//   window.addEventListener('DOMContentLoaded', (event) => {
//     const message = document.querySelector('.dancing-message');
//     setTimeout(() => {
//       message.style.display = 'none';
//     }, 5);
//   });
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
            {/* <div class="dancing-message">Welcome to my website!</div> */}
            <div class="bottom">
                <p class="text">
                    Discover a world of gaming greatness through our platform, where gamers connect, exchange, and
                    conquer together.
                    Seamlessly trade game accounts and unlock a wealth of thrilling experiences. Embrace the power of
                    community as you journey towards gaming victory.

                </p>
                <div class="btn-group" id="btn" role="group" aria-label="Basic example">
                    
                    <a class="btn" id='b1' role='button' href='./Buy'>BUY</a>


                    <a class="btn" id='b2' role='button' href='./sell'>SELL</a>

                </div>
                {/* <span className='arrow'></span> */}
                {session?.user?(
                    <div class="dancing-message"><span className='arrow'></span>Complete Your Profile</div>
                                ):(
                                    <div class="dancing-message"><span className='arrow' style={{left:'0.55em'}}></span>Sign In Here</div>
                                    )}
                
            </div>
            
        </div>


</>
  )
}