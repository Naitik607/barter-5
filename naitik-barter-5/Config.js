import firebase from 'firebase'
require('@firebase/firestore') 

 const firebaseConfig = {
  apiKey: "AIzaSyAX0KvHHDHox_AWczb2GrX3_u_iL7meqzs",
  authDomain: "barter-app-adb6a.firebaseapp.com",
  projectId: "barter-app-adb6a",
  storageBucket: "barter-app-adb6a.appspot.com",
  messagingSenderId: "421709307242",
  appId: "1:421709307242:web:3f8316071b969661ac5913"
};
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
 
  export default firebase.firestore();