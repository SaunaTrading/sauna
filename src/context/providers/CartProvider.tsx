'use client'
import React, { createContext, useState } from 'react';
import { useContext } from 'react';

interface CartProviderProps {
    children: React.ReactNode;
}

interface CartContextType {
    cartItems: string[];
    addToCart: (item: string) => void;
    removeFromCart: (item: string) => void;
}

export const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
});

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<string[]>([]);

    const addToCart = (item: string) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (item: string) => {
        setCartItems((prevItems) => prevItems.filter((i) => i !== item));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart: any = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}

export default CartProvider;
