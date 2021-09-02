import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqY9xW1Gfx1lFhgyt2jqH3saldfEiCNDA",
  authDomain: "cafe-app-7c819.firebaseapp.com",
  projectId: "cafe-app-7c819",
  storageBucket: "cafe-app-7c819.appspot.com",
  messagingSenderId: "593946969386",
  appId: "1:593946969386:web:d7feb26f611312280cca53"
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
