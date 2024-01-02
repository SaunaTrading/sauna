'use client'
import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Bell, User } from 'lucide-react'; // Assuming you have the required icons
import { Button } from '@/components/ui/button'; // Assuming you have a Button component from Tailwind UI
import { loggedIn } from '@/context/providers/UserProvider';
import { IconButton } from '@/components/ui/icon-button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Payment, columns } from "@/components/ui/columns"
import { DataTable } from "@/components/ui/data-table"
import { data } from "@/components/ui/data-table"

// import { UserButton } from "@/components/ui/user-button"
// import { ShoppingCartButton } from "@/components/ui/shopping-cart-button"
const iconWidth = 18;
const iconHeight = 18;

const UserSection: React.FC = () => {
    const loginStatus = loggedIn();
    const loggedInSection = () => {
        return (
            <div className="flex items-center justify-evenly space-x-2">
                <Drawer>
                    <IconButton className='block sm:hidden' child={<DrawerTrigger>
                        <Search width={iconWidth} height={iconHeight} />
                    </DrawerTrigger>} />
                    <DrawerContent>Place content for the search popover here.</DrawerContent>
                </Drawer>
                <Popover>
                    <IconButton child={<PopoverTrigger>
                        <Bell width={iconWidth} height={iconHeight} />
                    </PopoverTrigger>} />
                    <PopoverContent>Place content for the bell popover here.</PopoverContent>
                </Popover>
                <Popover>
                    <IconButton child={<PopoverTrigger>
                        <User width={iconWidth} height={iconHeight} />
                    </PopoverTrigger>} />
                    <PopoverContent>Place content for the user here.</PopoverContent>
                </Popover>

                <Button variant='ghost' asChild className='hidden md:flex p-2 ml-1 mr-1 items-center justify-center'><Link href="/sell">SELL</Link></Button>
                <Button className='hidden sm:block'><Link href="/shopping-cart">
                    <ShoppingCart className='h-4 w-4' />
                </Link></Button>
                <Drawer>
                    <IconButton className='block sm:hidden' child={<DrawerTrigger>
                        <ShoppingCart width={iconWidth} height={iconHeight} />
                    </DrawerTrigger>} />
                    <DrawerContent><DataTable columns={columns} data={data} />
                    </DrawerContent>
                </Drawer>
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
