import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAedqKe1ryAEcZfFMUTHA_MLqlKXcp9jV8",
    authDomain: "huzaifa-reacfolio.firebaseapp.com",
    projectId: "huzaifa-reacfolio",
    storageBucket: "huzaifa-reacfolio.appspot.com",
    messagingSenderId: "286901249528",
    appId: "1:286901249528:web:cd7ce2d719f9c16d00a20d",
    measurementId: "G-LMME11M7TW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
const db = getFirestore(app);



export { messaging, db }