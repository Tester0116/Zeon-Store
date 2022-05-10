import firebase from 'firebase/compat/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCCvmD7Uk8atr1AvjZowC9mkU35Y06A9VY',
  authDomain: 'zeon-store-4c30e.firebaseapp.com',
  projectId: 'zeon-store-4c30e',
  storageBucket: 'zeon-store-4c30e.appspot.com',
  messagingSenderId: '255061643658',
  appId: '1:255061643658:web:a901bca479b37bd79b7873',
  measurementId: 'G-GPNMWDDW6X',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const storage = firebase.storage()
export const fb = firebaseConfig

export default firebase

const provider = new GoogleAuthProvider()

const auth = getAuth()
export const getAuthFb = () => {
  signInWithPopup(auth, provider)
    .then((result) =>
      localStorage.setItem('Token', JSON.stringify(result.user.uid))
    )
    .catch((error) => console.log(error))
}
