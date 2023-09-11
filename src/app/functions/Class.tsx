import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, arrayUnion , collection, doc, setDoc, addDoc, getDoc, getDocs, serverTimestamp, where, query } from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBZk6c8h9y9av6p17XaK5KRjjxvobkI_-A",
    authDomain: "nexttwitter-26380.firebaseapp.com",
    projectId: "nexttwitter-26380",
    storageBucket: "nexttwitter-26380.appspot.com",
    messagingSenderId: "371231691643",
    appId: "1:371231691643:web:8d11fe90652099e824a3de",
    measurementId: "G-GS2CDH21SW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export const getDatabase = () => (db)

export const fetchTweets = async (db: any) => {
    try {
        const tweetsSnapshot = await getDocs(collection(db, "tweets"));

        const tweetsArray: any = [];
        tweetsSnapshot.forEach((tweet) => {
            const tweetData = tweet.data();
            tweetData.tweetId = tweet.id;
            tweetsArray.push(tweetData);
        });

        return tweetsArray;
    } catch (error) {
        console.error("Error fetching tweets:", error);
        return [];
    }
};

export const handlePost = async (db: any, content: any, username: any, setTweetsData: any, tweetsData: any) => {
    if (username && content) {
        const newTweet = {
            timestamp: serverTimestamp(),
            content,
            Like: 0,
            Comment: 0,
            Shared: 0,
            username: username,
        };

        const tweetRef = await addDoc(collection(db, "tweets"), newTweet);
        const tweetId = tweetRef.id;

        const userTweetsRef = collection(db, "userTweets");
        const userDocRef = doc(userTweetsRef, username);
        const userTweetsCollectionRef = collection(userDocRef, "tweets");
        await setDoc(doc(userTweetsCollectionRef, tweetId), newTweet);

        setTweetsData([newTweet, ...tweetsData]);
    }
};

export const handleChat = async (db: any, message: any, FromUsername: any, ToUsername: any, setConversation: any, conversation: any) => {
    if (FromUsername && ToUsername && message) {
        const newChat = {
            message,
            fromUsername: FromUsername,
            toUsername: ToUsername,
        };

        const isFromUsernameFirst = FromUsername.localeCompare(ToUsername) <= 0;
        const chatID = isFromUsernameFirst ? `${FromUsername} + ${ToUsername}` : `${ToUsername} + ${FromUsername}`;

        const chatDocRef = doc(collection(db, "Direct Messages"), chatID);
        const chatDoc = await getDoc(chatDocRef);

        if (chatDoc.exists()) {
            const existingConversation = chatDoc.data().conversation || [];
            const updatedConversation = [...existingConversation, newChat];

            await updateDoc(chatDocRef, { conversation: updatedConversation });
        } else {
            await setDoc(chatDocRef, { conversation: [newChat] });
        }

        const userTweetsCollectionRef = collection(db, "userConvo", FromUsername, "DM");
        await setDoc(doc(userTweetsCollectionRef, chatID), newChat);

        setConversation([newChat, ...conversation]);
    }
};

export const fetchChat = async (db: any, fromUsername: any, toUsername: any) => {
    const chatID = fromUsername.localeCompare(toUsername) <= 0
        ? `${fromUsername} + ${toUsername}`
        : `${toUsername} + ${fromUsername}`;

    const chatDocRef = doc(collection(db, "Direct Messages"), chatID);
    const chatDocSnap = await getDoc(chatDocRef);

    if (chatDocSnap.exists()) {
        const conversation = chatDocSnap.data().conversation || [];
        return conversation;
    } else {
        return [];
    }
};

export const handleDisplayNameUpdate = async (user: any, displayName: any) => {
    console.log("Hello")
    if (user && displayName) {
        console.log(user)
        try {
            // Update the user's display name in Firebase
            await updateProfile(user, { displayName: displayName });
            console.log('Display name updated successfully');

        } catch (error) {
            console.error('Error updating display name', error);
        }
    }
};

export const updateDisplayName = async (user, displayName) => {
    if (user && displayName) {
      try {
        await updateProfile(user, {
          displayName: displayName,
          photoURL: null,
        });
        console.log('Display name updated successfully');
      } catch (error) {
        console.error('Error updating display name', error);
      }
    }
  };