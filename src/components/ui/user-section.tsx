'use client'
import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Bell, User as UserIcon } from 'lucide-react'; // Assuming you have the required icons
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
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "@/components/ui/avatar"
import { columns } from "@/components/ui/columns"
import { DataTable } from "@/components/ui/data-table"
import { data } from "@/components/ui/data-table"
import { SearchBar } from "@/components/ui/search-bar"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useUser } from "@/context/providers/UserProvider"

const iconWidth = 18;
const iconHeight = 18;

const UserSection: React.FC = () => {
    const { user } = useUser();

    const closeSheet = () => {
        document.getElementById('SheetClose')?.click();
    }

    const loginStatus = loggedIn();
    const loggedInSection = () => {
        return (
            <div className="flex items-center justify-evenly space-x-2">
                <Sheet modal={false}>
                    <IconButton className='block sm:hidden' child={<SheetTrigger>
                        <Search width={iconWidth} height={iconHeight} />
                    </SheetTrigger>} />
                    <SheetContent side='top' >
                        <SearchBar className='mt-4' onEnter={closeSheet} />
                    </SheetContent>
                </Sheet>
                <Popover>
                    <IconButton child={<PopoverTrigger>
                        <Bell width={iconWidth} height={iconHeight} />
                    </PopoverTrigger>} />
                    <PopoverContent>Place content for the bell popover here.</PopoverContent>
                </Popover>
                <DropdownMenu>
                    <IconButton child={<DropdownMenuTrigger>
                        <Avatar className='hidden md:block'>
                            <AvatarImage width={iconWidth} height={iconHeight} src={user.image} alt="@shadcn" />
                            <AvatarFallback>
                                <UserIcon className='block md:hidden' width={iconWidth} height={iconHeight} />
                            </AvatarFallback>
                        </Avatar>
                        <UserIcon className='block md:hidden' width={iconWidth} height={iconHeight} />
                    </DropdownMenuTrigger>} />
                    <DropdownMenuContent>
                        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button variant='ghost' asChild className='hidden md:flex p-2 ml-1 mr-1 items-center justify-center'><Link href="/sell">SELL</Link></Button>
                <Button className='px-6 hidden sm:block'><Link href="/shopping-cart">
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
                <IconButton className='block sm:hidden' icon={<UserIcon />}></IconButton>
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
