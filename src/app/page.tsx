'use client'
import React, { useState, useEffect } from 'react';
import { useUser, UserProvider } from './Components/UserContext';
import Navtest from './Components/Navtest';
import NavApptest from './Components/NavApptest';
import MainContent from './Components/MainContent';

export function HomePage() {
    const { currentUser } = useUser()

    if (!currentUser) {
        return <h1 className='flex text-8xl w-screen h-screen justify-center items-center'>Loading...</h1>
;
    }

    return (
        <div>
            <Navtest />
            <MainContent user={currentUser.displayName || currentUser.email} /> 

        </div>
    );
}

export default function Home() {
    return (
        <UserProvider>
            <HomePage />
        </UserProvider>
    )
}