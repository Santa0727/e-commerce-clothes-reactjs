import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAHfsr6iswGwSwob-4HREPPn7hYBWvz7VI",
    authDomain: "crown-db-214d3.firebaseapp.com",
    databaseURL: "https://crown-db-214d3.firebaseio.com",
    projectId: "crown-db-214d3",
    storageBucket: "crown-db-214d3.appspot.com",
    messagingSenderId: "831474492727",
    appId: "1:831474492727:web:60a29cad0df9eb597566b2",
    measurementId: "G-0W08P8VQ6V"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    console.log(userAuth.uid);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        }
        catch(error) {
            console.log('error creating user', error);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
