'use client'
import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Bell, User } from 'lucide-react'; // Assuming you have the required icons
import { Button } from '@/components/ui/button'; // Assuming you have a Button component from Tailwind UI
import { loggedIn } from '@/context/providers/UserProvider';
import { IconButton } from '@/components/ui/icon-button';
// import { UserButton } from "@/components/ui/user-button"
// import { ShoppingCartButton } from "@/components/ui/shopping-cart-button"

const UserSection: React.FC = () => {
    const loginStatus = loggedIn();
    const loggedInSection = () => {
        return (
            <div className="flex items-center">
                <IconButton icon={<Search/>} className='sm:hidden'  />
                <IconButton icon={<Bell/>} />
                <IconButton icon={<User/>} className='rounded-full p-2'/>
                <Button asChild className='hidden sm:block p-2 ml-1 mr-1'><Link href="/sell">SELL</Link></Button>
                <IconButton icon={<ShoppingCart/>}className='block sm:hidden rounded-full p-2'/>
                <Button className='hidden sm:block'><Link href="/shopping-cart"><ShoppingCart/></Link></Button>
            </div>
        );
    }
    const loggedOutSection = () => {
        return (
            <div className="flex items-center">
                <IconButton className='block sm:hidden' icon={<User />}></IconButton>
                <div className="hidden sm:flex items-center gap-2">
                    <Button><Link href="/login">Login</Link></Button>
                    <Button><Link href="/register">Register</Link></Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center">
            {(loginStatus) && loggedInSection()}
            {(!loginStatus) && loggedOutSection()}
        </div>
    );
};

export default UserSection;
