import firebase from 'firebase';
import firebaseui from 'firebaseui';

export const config = {
    apiKey: "AIzaSyCJiJFA4uNXNgbYpTCMTq2Nt8nPeXZuufk",
    authDomain: "overwatch-strat-roulette.firebaseapp.com",
    databaseURL: "https://overwatch-strat-roulette.firebaseio.com",
    storageBucket: "overwatch-strat-roulette.appspot.com",
    messagingSenderId: "124651054724"
};

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth();
export const firebaseAuthUi = new firebaseui.auth.AuthUI(firebaseAuth);

export const firebaseAuthUiConfig = {
    callbacks: {
        signInSuccess: function(user, credential, redirectUrl) {
            //alert("Signed In: " + user.email + ' redirecting to ' + redirectUrl);
            //if (self.props.onSignIn) {
            //    self.props.onSignIn(user);
            //}
            return true;
        }
    },
    //queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
    //queryParameterForWidgetMode: 'mode',
    //credentialHelper: firebaseAuthUi.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
    //signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ]
};