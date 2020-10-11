import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDqS0DQWVUD2ME-BuLDjBO2cOwBmsRsbYI",
	authDomain: "facebook-messenger-clone-ab8e1.firebaseapp.com",
	databaseURL: "https://facebook-messenger-clone-ab8e1.firebaseio.com",
	projectId: "facebook-messenger-clone-ab8e1",
	storageBucket: "facebook-messenger-clone-ab8e1.appspot.com",
	messagingSenderId: "155228583277",
	appId: "1:155228583277:web:202fe47b6fa03b9cf71664",
	measurementId: "G-2ECKLGRXVR",
});

const db = firebaseApp.firestore();

export default db;
