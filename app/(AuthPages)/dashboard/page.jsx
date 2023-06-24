// page.jsx
'use client'
import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import PhoneSignUp from '../../phoneSignUp';

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
      toast.success('Your profile is completed.');
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
    <div>
      <h1>Update Data</h1>
      <input
        id="phoneNum"
        type="text"
        placeholder="PhoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleSignInSubmit}>Verify</button>
      <PhoneSignUp
        phoneNumber={document.getElementById('phoneNum')?.value}
        ref={phoneSignUpRef}
        onOtpVerification={handleOtpVerification}
      />
      <input
        type="text"
        placeholder="GamingName"
        value={gamingName}
        onChange={(e) => setGamingName(e.target.value)}
      />
      <button onClick={handleUpdateData} disabled={!isOtpVerified}>
        Update
      </button>
    </div>
  );
}
