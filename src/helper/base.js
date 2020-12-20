import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLrP8Q4E41o13lhPWzd3M5AydWwxBDqGo",
  authDomain: "civic-meridian-261111.firebaseapp.com",
  projectId: "civic-meridian-261111",
  storageBucket: "civic-meridian-261111.appspot.com",
  messagingSenderId: "318739475838",
  appId: "1:318739475838:web:62890a6fcfec163ae2172f"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;