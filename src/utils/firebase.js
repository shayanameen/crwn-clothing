import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithRedirect,
} from 'firebase/auth';
import {
  // GET DOCUMENT
  doc,
  // GET DOCUMENT'S DATA
  getDoc,
  getFirestore,
  // SET DOCUMENT'S DATA
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBxUPzB5xZkMyBs0DCfEAvNZsg6ICImLLA',
  authDomain: 'crown-clothing-db-6216f.firebaseapp.com',
  projectId: 'crown-clothing-db-6216f',
  storageBucket: 'crown-clothing-db-6216f.appspot.com',
  messagingSenderId: '992186259545',
  appId: '1:992186259545:web:9c8e9d9b31018970d03948',
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  // Firestore instentiates path and id for the document but doesn't actually create the document
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const crearedAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        crearedAt,
      });
    } catch (error) {
      console.log('Error creating the User', error.message);
    }
  }

  return userDocRef;
};
