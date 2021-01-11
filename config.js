import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAGno7Es_DEOosd6PtQk8zTbnQyJDFK-y8",
    authDomain: "c71-pro.firebaseapp.com",
    databaseURL: "https://c71-pro.firebaseio.com",
    projectId: "c71-pro",
    storageBucket: "c71-pro.appspot.com",
    messagingSenderId: "84377885874",
    appId: "1:84377885874:web:cf4b0db32a60c42e8d3dab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();