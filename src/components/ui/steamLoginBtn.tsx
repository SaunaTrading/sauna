import React from 'react';
import { Button } from './button';
import Link from 'next/link';

const useSteamLogin = () => {
    // Mock implementation of the Steam login hook
    const loginWithSteam = () => {
        // Simulate the login process
        console.log('Logging in with Steam...');
    };

    return {
        loginWithSteam,
    };
};

const SteamLoginBtn: React.FC = () => {
    const { loginWithSteam } = useSteamLogin();

    return (
        <Button onClick={loginWithSteam}>
            Login with Steam
        </Button>
    );
};

export default SteamLoginBtn;
