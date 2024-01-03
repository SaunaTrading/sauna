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
import { SearchBar } from './search-bar';

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export default function TopNav() {
    return (
        <div>
            <nav className={cn("flex items-center justify-between p-2", fontSans.variable)}>
                <div className='flex items-center justify-between md:w-full'>
                    <Hamburgler />
                    <h1 className="text-2xl font-bold mx-2">Logo</h1>
                    <GameSelect className='hidden md:flex' />
                    <Button variant='ghost' className="hidden sm:flex items-center justify-center p-2 ">
                        MARKET
                    </Button>
                    <div className="hidden sm:flex items-center justify-between space-x-2 sm:mx-2 md:w-full md:justify-center ">
                        <SearchBar/>
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