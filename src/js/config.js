import firebase from 'firebase/app'

const config = {
 apiKey: "AIzaSyA-PEfyBB0E6VlYJNBuKnP_sdB4FaOp3kQ",
 authDomain: "edfirebase-6f24b.firebaseapp.com",
 databaseURL: "https://edfirebase-6f24b.firebaseio.com",
 projectId: "edfirebase-6f24b",
 storageBucket: "edfirebase-6f24b.appspot.com",
 messageingSenderId: "971660403208"
}

const init = () => firebase.initializeApp(config);

init()
