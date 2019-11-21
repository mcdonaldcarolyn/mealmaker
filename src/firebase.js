import firebase from "firebase/app";
import "firebase/firestore";
import { API_KEY } from "./key";
// Initialize Firebase
const config = {
  apiKey: API_KEY,
  authDomain: "goalz-7e008.firebaseapp.com",
  databaseURL: "YOUR_DB_URL",
  projectId: "goalz-7e008",
  storageBucket: "goalz-7e008.appspot.com",
  messagingSenderId: "169013087966"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
