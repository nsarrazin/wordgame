import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDI8cjNgpx5lJBii2WvVZ82xp41AfFptg8',

  authDomain: 'wordgame-90bc9.firebaseapp.com',

  databaseURL: 'https://wordgame-90bc9-default-rtdb.europe-west1.firebasedatabase.app',

  projectId: 'wordgame-90bc9',

  storageBucket: 'wordgame-90bc9.appspot.com',

  messagingSenderId: '61024508067',

  appId: '1:61024508067:web:b232a4768cefefdf944716',

  measurementId: 'G-4VQT2JVYLW',
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
