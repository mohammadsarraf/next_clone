'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './Components/Navbar';
import ComposerBox from './Components/ComposerBox';
import AppNavbar from './Components/AppNavbar';
import MainContent from './Components/MainContent';
import Test from './Components/Test';
import { useUser, UserProvider } from './Components/UserContext';
import Login from './Components/Login';
import Navtest from './Navtest';

export function User() {
	const { currentUser } = useUser()

	return (
		<div>
			{currentUser ?
				(
					<div>

						<Navtest />

					</div>
				)
				:
				(<Login user={currentUser} />)}
		</div>
	)
}

export default function Home() {
	return (
		<UserProvider>
			<User />
		</UserProvider>
	)
}