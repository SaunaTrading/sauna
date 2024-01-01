import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserSection from "@/components/ui/user-section";
import * as React from "react"
import { Separator } from '@/components/ui/separator';
import { HorizontalItemTypeList } from '@/components/ui/item-type-list';
import { Skeleton } from './skeleton';
import Hamburgler from './hamburgler';
import { GameSelect } from './game-select';
import { dummyTypes } from '@/types/items';

// import search icon, bell icon, profile icon, and cart icon outlines and solids
// from lucide react
import { Search } from "lucide-react";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export default function TopNav() {
    return (
        <div>
            <nav className={cn("flex items-center justify-between p-2", fontSans.variable)}>
                <div className='flex items-center justify-between'>
                    <Hamburgler />
                    <h1 className="text-2xl font-bold mx-2">Logo</h1>
                    <GameSelect className='hidden lg:flex' />
                    <Button variant='ghost' className="hidden sm:flex items-center justify-center p-2 ">
                        MARKET
                    </Button>
                    <div className="hidden sm:flex items-center justify-between space-x-2 md:ml-32 lg:ml-48">
                        <Search className='h-4 w-4 -mr-2'/>
                        <Input
                            className="hidden sm:block w-64 h-8 p-2 border-none focus-visible:ring-none"
                            placeholder="Search"
                        />
                    </div>

                </div>
                <div className="flex items-center justify-between space-x-4">
                    <UserSection />
                </div>
            </nav>
            <div className='transition ease-in-out hidden md:flex flex-col items-center justify-center'>
                <Separator className='w-11/12' />
                <HorizontalItemTypeList itemTypes={dummyTypes} />
            </div>
        </div>
    );
}