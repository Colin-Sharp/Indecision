import firebase from 'firebase/app';
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyD7uiRYUYQVlUVrxjn4wCpdJa3brO0WR2c",
  authDomain: "indecision-eb85e.firebaseapp.com",
  projectId: "indecision-eb85e",
  storageBucket: "indecision-eb85e.appspot.com",
  messagingSenderId: "1068509593484",
  appId: "1:1068509593484:web:6b4c3be36b29dfb7cb20a9",
  measurementId: "G-99TF1H3KPH"
};

let app = null;

if(!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export default firebase;