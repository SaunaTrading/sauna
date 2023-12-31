'use client'
import React from 'react';
import CartProvider from './CartProvider';
import UserProvider from './UserProvider';

interface MetaProviderProps {
    children: React.ReactNode;
}

const MetaProvider: React.FC<MetaProviderProps> = ({ children }) => {
    return (
        <UserProvider>
            <CartProvider>
                    {children}
            </CartProvider>
        </UserProvider>
    );
};

export default MetaProvider;
