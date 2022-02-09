// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAra2UoQHTkEKgQ67gDN0UYBTMbsxL7aSU',
  authDomain: 'house-marketplace-app-4eb67.firebaseapp.com',
  projectId: 'house-marketplace-app-4eb67',
  storageBucket: 'house-marketplace-app-4eb67.appspot.com',
  messagingSenderId: '135341712174',
  appId: '1:135341712174:web:68c4590d7769d7b3f990bf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = app.firestore();
