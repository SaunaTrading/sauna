'use client'
import React, { createContext, useState } from 'react';
import { useContext } from 'react';

interface User {
    name: string;
    steamId: string;
    profilePicture: string;
    email?: string;
    hashedPassword?: string;
    userSettings?: any;
    notifications?: string[];
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
});

const dummyUser: User = {name: "Tanner H", steamId: "12232322433", profilePicture: "www.google.com", userSettings: {theme: "dark"}}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(dummyUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const loggedIn: any = () => {
    const { user } = useUser();
    return user !== null;
}

export const useUser: any = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}

export default UserProvider;
