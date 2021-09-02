import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDl7qdpys09Ve2MYffbNJLTNjApf3wQT4",
  authDomain: "cafe-app-119.firebaseapp.com",
  databaseURL: "https://cafe-app-119-default-rtdb.firebaseio.com",
  projectId: "cafe-app-119",
  storageBucket: "cafe-app-119.appspot.com",
  messagingSenderId: "765733684026",
  appId: "1:765733684026:web:65e68e9fbb669d5582c603"
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
