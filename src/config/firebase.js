import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCGp99hgjpJ_zKModv1glDqicXLeC7m5IM",
  authDomain: "dsc-cgc-aace0.firebaseapp.com",
  databaseURL: "https://dsc-cgc-aace0.firebaseio.com",
  projectId: "dsc-cgc-aace0",
  storageBucket: "dsc-cgc-aace0.appspot.com",
  messagingSenderId: "236543744948",
  appId: "1:236543744948:web:5e3840f5b2bd7f2241b0e1"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};