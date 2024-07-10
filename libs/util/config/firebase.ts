import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey:
    '292504206656-tv0f0bpopt0r6jon6ur2cgoqjfh6evsg.apps.googleusercontent.com',
  authDomain: 'controleestoque.firebaseapp.com',
  projectId: 'project-343289254826',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

export const auth = getAuth(firebaseApp)
