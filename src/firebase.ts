import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDLJMQU6rx2L5bOszJ6ZgT2SwGEsDxK7rQ',
  authDomain: 'mytaste-app.firebaseapp.com',
  databaseURL: 'https://mytaste-app.firebaseio.com',
  projectId: 'mytaste-app',
  storageBucket: 'mytaste-app.appspot.com',
  messagingSenderId: '414485531416',
  appId: '1:414485531416:web:a537fe3c24c3938758ec6d',
};

export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

export const db = getFirestore(app);
