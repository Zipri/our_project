import firebase from 'firebase/app'
import 'firebase/auth';

export const API_URL = 'https://lickett.com/api/';

export const URLS = {
  LOGIN: `${API_URL}login`,
  SIGNUP: `${API_URL}create`,
  USER: `${API_URL}user`,
  LOGOUT: `${API_URL}`
};

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain:  process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

export default app
