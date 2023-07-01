// page.jsx
'use client'
import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import PhoneSignUp from '../../phoneSignUp';
import './dashboard.css'

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gamingName, setGamingName] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const anotherSession = useSession()


  useEffect(() => {
    if (anotherSession?.status === 'unauthenticated') {
       router.push('/') 
    }
})


  const handleUpdateData = async () => {
    if (!isOtpVerified) {
      toast.error('Please verify your phone number first.');
      return;
    }

    const data = {
      email: session?.user?.email,
      phoneNumber: phoneNumber,
      gamingName: gamingName,
    };
    try {
      await axios.put('/api/updateUser', data);
      toast.success('Your profile is completed.')
      .then(()=>router.push('/'));
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (phoneSignUpRef.current) {
      phoneSignUpRef.current.onSignInSubmit(e);
    }
  };

  const phoneSignUpRef = useRef(null);
  const handleOtpVerification = (isVerified) => {
    setIsOtpVerified(isVerified);
  };
      useEffect(() => {
        if (isOtpVerified) {
            // OTP is verified, enable the "Update" button
            const updateButton = document.getElementById('updateButton');
            if (updateButton) {
              updateButton.disabled = false;
            }
          }
        }, [isOtpVerified]);

  return (
    <>
    <div className='container' style={{height:'100vh'}}>
    
{/* <div class="background">
        <div class="shape"></div>
        <div class="shape"></div> */}
    {/* </div> */}
    {/* <form> */}
    <div className='dash'>
        <h3>Update Account</h3>

        <label for="username">Mobile Number</label>
        <div style={{display:'flex'}}>
        <input
        id="phoneNum"
        type="number"
        placeholder="PhoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
       <button onClick={handleSignInSubmit}>Verify</button>
       </div>
        {/* <input type="text" placeholder="Email or Phone" id="username"/> */}

        <label for="password"></label>
        <PhoneSignUp
        phoneNumber={document.getElementById('phoneNum')?.value}
        ref={phoneSignUpRef}
        onOtpVerification={handleOtpVerification}
      />
    <br/>
    <label for="password" style={{marginTop:'5px'}}>Account Name</label>
    <input
    style={{width:'100%'}}
        type="text"
        placeholder="GamingName"
        value={gamingName}
        onChange={(e) => setGamingName(e.target.value)}
      />
    {/* <input type="button" value="Sign in"/><br/> */}
    <button onClick={handleUpdateData} disabled={!isOtpVerified} style={{marginTop:'56px',width:'100%'}}>
        Update
      </button>

    </div>
    </div>
    </>


  );
}
