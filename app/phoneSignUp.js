'use client'
import firebase from './firebase';
import firebase1 from 'firebase/app';
import 'firebase/app';
import React from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
// import { getAuth, signInWithPhoneNumber } from "firebase/auth";


// export default function HomePage() {
export default class page extends React.Component {

    
    
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState(
            {
                [name]: value,
            }
        );
    };
    configureCaptcha = () => {

        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
                console.log("recaptcha verified");
            },
            defaultCountry: "IN"
        }, auth);
    };
    onSubmitOtp = (e) => {
        e.preventDefault();
        const code = this.state.otp;
        try {
            
            confirmationResult.confirm(code).then((result) => {
                // User signed in successfully.
                const user = result.user;
                toast.success("Otp Verified")
                this.props.onOtpVerification(true);
                // ...
            }).catch((error) => {
                toast.error("Incorrect OTP Enter Again!!")
                // User couldn't sign in (bad verification code?)
                // ...
            });
            
        } catch (error) {
            toast.error("Incorrect OTP Enter Again!!")
        }
    }

    onSignInSubmit = (e) => {
        document.getElementById('otpform').style.display = 'flex';
        e.preventDefault();
        this.configureCaptcha();

        const  phoneNumber1  = "+91" + this.props.phoneNumber;
        console.log(phoneNumber1);
        const appVerifier = window.recaptchaVerifier;

        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber1, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
            });
    };
    //   const sendVerificationCode = () => {
    //     const phoneNumber = "+1234567890"; // Enter the phone number you want to verify here

    //     const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container'); // Replace 'recaptcha-container' with the ID of your reCAPTCHA container element

    //     firebase.auth.signInWithPhoneNumber(phoneNumber,appVerifier)
    //       .then((confirmationResult) => {
    //         const verificationId = confirmationResult.verificationId;
    //         localStorage.setItem('verificationId', verificationId);
    //         // Proceed with the OTP verification
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    render() {
        return (
            <div>
                <div id='sign-in-button'></div>
                {/* <form onSubmit={this.onSignInSubmit}>
                    <input type='number' name='mobile' value={this.props}  placeholder='Enter Mobile Number' onChange={this.handleChange}></input>
                    <button type='submit'>Submit</button>
                </form> */}
                <form id='otpform' onSubmit={this.onSubmitOtp} style={{display:'none'}}>
                    <input type='number' name='otp' placeholder='Enter otp Number' required onChange={this.handleChange}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}
