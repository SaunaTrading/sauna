import React from 'react';
import { Button } from './button';
import { useCart } from '@/context/providers/CartProvider';
import { ShoppingCart } from 'lucide-react';

const ShoppingCartButton = () => {
    const { cartItems, addToCart } = useCart();

    return (
        <Button onClick={addToCart} className="shopping-cart-button">
            <ShoppingCart />
            <span className="cart-count">{cartItems.length}</span>
        </Button>
    );
};

// export default ShoppingCartButton;