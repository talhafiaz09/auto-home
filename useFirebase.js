import { useEffect, useState } from "react";
import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyBrQI_NKXcbZ0IeTHaacZoWn6fEj1HMFHA",
  authDomain: "assignment-wahab.firebaseapp.com",
  projectId: "assignment-wahab",
  databaseURL: "https://assignment-wahab-default-rtdb.firebaseio.com/",
  storageBucket: "assignment-wahab.appspot.com",
  messagingSenderId: "63375335227",
  appId: "1:63375335227:web:728dddca63ad3ceb00611e",
};
export default useFirebase = () => {
  const [data, setData] = useState(null);
  const initializeAppFirebase = async () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      firebase.app(); // if already initialized, use that one
    }
  };
  const getData = () => {
    firebase
      .database()
      .ref("things")
      .once("value", (data) => setData(data.toJSON()));
  };
  const setFirebaseData = (entity, value) => {
    firebase
      .database()
      .ref("things/" + entity)
      .set({ value: value });
    getData();
  };
  return { initializeAppFirebase, getData, data, setFirebaseData };
};
