// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDiV2Sm4AqBesS-EbNOQl7RtEgORh72rSw',
  authDomain: 'controleestoque-1003d.firebaseapp.com',
  projectId: 'controleestoque-1003d',
  storageBucket: 'controleestoque-1003d.appspot.com',
  messagingSenderId: '343289254826',
  appId: '1:343289254826:web:20d3e4f4d0152678ee11d3',
  measurementId: 'G-6S7H3PL1FN',
}

// Initialize Firebase
const firabeApp = initializeApp(firebaseConfig)
export const storage = getStorage(firabeApp)
const analytics = getAnalytics(firabeApp)
