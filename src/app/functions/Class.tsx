import { initializeApp } from "firebase/app";
import { getFirestore, updateDoc, arrayUnion , collection, doc, setDoc, addDoc, getDoc, getDocs, serverTimestamp, where, query } from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDfGtvjHibH_VQNi3fIFxoJEI-_RzbrHCw",
    authDomain: "twitter-clone-10996.firebaseapp.com",
    databaseURL: "https://twitter-clone-10996-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-10996",
    storageBucket: "twitter-clone-10996.appspot.com",
    messagingSenderId: "617659631276",
    appId: "1:617659631276:web:e7e713dfc82f3573244109",
    measurementId: "G-3FDM8VPR8Q"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


//User writing in composerBox
export const getDatabase = () => {
    return db
}

export const fetchTweets = async (db) => {
    try {
        const tweetsSnapshot = await getDocs(collection(db, "tweets"));

        const tweetsArray = [];
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

export const handlePost = async (db, content, username, setTweetsData, tweetsData) => {
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

// import { arrayUnion } from "firebase/firestore"; // Import arrayUnion function

export const handleChat = async (db, message, FromUsername, ToUsername, setConversation, conversation) => {
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

export const fetchChat = async (db, fromUsername, toUsername) => {
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

// export async function getUserPosts(userId: string) {
//     try {
//         const userPostsRef = doc(db, 'userPosts', userId);
//         const userPostsSnapshot = await getDocs(userPostsRef);

//         if (userPostsSnapshot.exists()) {
//             return userPostsSnapshot.data();
//         } else {
//             console.log('User has no posts.');
//             return {};
//         }
//     } catch (error) {
//         console.error('Error getting user posts', error);
//         return {};
//     }
// }