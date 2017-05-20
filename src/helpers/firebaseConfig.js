import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDFHGGSjrSzeyPEfGIMGg6JGDY0EV8ZbGI',
  authDomain: 'pure-83e27.firebaseapp.com',
  databaseURL: 'https://pure-83e27.firebaseio.com',
  projectId: 'pure-83e27',
  storageBucket: 'pure-83e27.appspot.com',
  messagingSenderId: '476647766797'
}

export const firebaseApp = firebase.initializeApp(config)
export const db = firebaseApp.database()
