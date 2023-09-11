'use client'
import React, { useEffect, useState } from 'react';
import ComposerBox from './ComposerBox'
import Post from './Post';
import * as fb from '../functions/Class';
import NavApptest from './NavApptest';
import Pv from '../chats/Components/Pv';
import DM from '../chats/Components/DM';


const content0 = `Well, this is interesting. #BaldursGate3 uses "Point & Click" movement on PC with a M&K. Which made me curious how that would even work on Consoles.I decided to test it with my controller and out it turns out the movement system completely changes while using a controller.`

export default function MainContent(porps: any) {
    const [content, setContent] = useState([]);
    const [refreshFlag, setRefreshFlag] = useState(false);
    const [tweetsData, setTweetsData] = useState([]);
    const db = fb.getDatabase();
    const username = "2MSTR000";



    useEffect(() => {
        const fetchData = async () => {
            const fetchedTweets: any = await fb.fetchTweets(db);
            setTweetsData(fetchedTweets);
        }

        fetchData();
    }, [db])

    return (
        <div className='flex flex-col h-screen ml-80'>
            <NavApptest username={porps.user} signOut={porps.signOut}/>

            <div className='flex h-screen'>
                <div className='ml-44 mr-44'>
                    <ComposerBox username={`2MSTR000`} onPostSubmit={() => setRefreshFlag(!refreshFlag)} />
                    {tweetsData.map((tweet: any) => (
                        <div key={tweet.tweetId}>
                            <Post
                                username={`username`}
                                content={content0}
                                timestamp={`12h`}/>

                    </div>
                    ))}
                </div>
                {/* <DM /> */}
                <Pv username={"Moe"} />

            </div>
        </div>
    )
}