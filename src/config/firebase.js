import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx62yQ3uq5Q5SHa443lFvJ5Z0ouR4xBIg",
  authDomain: "cafe-app-19f62.firebaseapp.com",
  projectId: "cafe-app-19f62",
  storageBucket: "cafe-app-19f62.appspot.com",
  messagingSenderId: "719694184967",
  appId: "1:719694184967:web:926e34c1dc2785c6dd60a2",
};
/* const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID,
  }; */

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
