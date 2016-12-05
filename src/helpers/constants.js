import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCJiJFA4uNXNgbYpTCMTq2Nt8nPeXZuufk",
    authDomain: "overwatch-strat-roulette.firebaseapp.com",
    databaseURL: "https://overwatch-strat-roulette.firebaseio.com",
    storageBucket: "overwatch-strat-roulette.appspot.com",
    messagingSenderId: "124651054724"
};

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth