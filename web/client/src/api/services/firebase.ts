import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDxe35e5EOKk5vLAFVf9fg4yE2TcZZPmRg",
    authDomain: "vocare-366615.firebaseapp.com",
    projectId: "vocare-366615",
    storageBucket: "vocare-366615.appspot.com",
    messagingSenderId: "461111192210",
    appId: "1:461111192210:web:d73859e4faa75dc795d44b",
    measurementId: "G-B2WNY94KD9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export const firestore = firebase.firestore();