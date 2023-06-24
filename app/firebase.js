// firebaseConfig.js
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import firebase from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

var firebaseConfig = {
    apiKey: "AIzaSyBJxczuKYIcStOtnaFMKwdKFjEsc411XbA",
    authDomain: "otptry-186ee.firebaseapp.com",
    projectId: "otptry-186ee",
    storageBucket: "otptry-186ee.appspot.com",
    messagingSenderId: "95829465521",
    appId: "1:95829465521:web:5d37492c9209a772cd0590",
    measurementId: "G-L9M0VZX55J"
  };

  // const app = initializeApp(firebaseConfig);
  // const analytics = analytics(app);
  // firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// export default firebase;
