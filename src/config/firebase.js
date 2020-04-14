import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDsKYfDD9snfFnrCOG2CKp8xClVb_5Ay7E",
  authDomain: "dsc-aura.firebaseapp.com",
  databaseURL: "https://dsc-aura.firebaseio.com",
  projectId: "dsc-aura",
  storageBucket: "dsc-aura.appspot.com",
  messagingSenderId: "904550820845",
  appId: "1:904550820845:web:dc711ef8eb1dbca41595e4"
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