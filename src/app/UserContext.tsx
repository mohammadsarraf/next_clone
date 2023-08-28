import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getProfilePictureUrl, uploadProfilePicture } from './functions/Class'; // Update the import path accordingly

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};
