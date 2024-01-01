import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserSection from "@/components/ui/user-section";
import { IconButton } from './icon-button';
import * as React from "react"
import { Separator } from '@/components/ui/separator';
import { HorizontalItemTypeList } from '@/components/ui/item-type-list';
import { ItemType } from './item-type-list';
import { Skeleton } from './skeleton';

// import search icon, bell icon, profile icon, and cart icon outlines and solids
// from lucide react
import { Menu, Search, Bell, BellDot, User, ShoppingCart } from "lucide-react";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

const dummyTypes: ItemType[] = [
    {
        name: "Pistols",
        link: "csgo/items/pistols",
        dbFilters: ["pistols"],
        subTypes: ['shadowed', 'horizon', 'gouda', 'beli', 'cheese', 'hats', 'goo bad']
    },
    {
        name: "SMGs",
        link: "csgo/items/smg",
        dbFilters: ["smgs"],
        subTypes: ['shadowed', 'horizon', 'gouda', 'beli', 'cheese', 'hats', 'goo bad']
    },
    {
        name: "Rifles",
        link: "csgo/items/rifles",
        dbFilters: ["rifles"],
        subTypes: ['shadowed', 'horizon', 'gouda', 'beli', 'cheese', 'hats', 'goo bad']
    },
    {
        name: "Snipers",
        link: "csgo/items/snipers",
        dbFilters: ["snipers"],
        subTypes: ['shadowed', 'horizon', 'gouda', 'beli', 'cheese', 'hats', 'goo bad']
    },
    {
        name: "Shotguns",
        link: "csgo/items/shotguns",
        dbFilters: ["shotguns"],
        subTypes: ['shadowed', 'horizon', 'gouda', 'beli', 'cheese', 'hats', 'goo bad']
    },
    {
        name: "Machine Guns",
        link: "csgo/items/machine-guns",
        dbFilters: ["machine-guns"],
        subTypes: ['shadowed', 'horizon', 'gouda', 'beli', 'cheese', 'hats', 'goo bad']
    },
    {
        name: "Gloves",
        link: "csgo/items/gloves",
        dbFilters: ["gloves"],
        subTypes: ['shadowed', 'horizon', 'gouda', 'beli', 'cheese', 'hats', 'goo bad']
    },
    {
        name: "Knives",
        link: "csgo/items/knives",
        dbFilters: ["knives"],
        subTypes: ['shadowed', 'horizon', 'gouda', 'beli', 'cheese', 'hats', 'goo bad']
    },
    {
        name: "Stickers",
        link: "csgo/items/stickers",
        dbFilters: ["stickers"],
        subTypes: ['shadowed', 'horizon', 'gouda', 'beli', 'cheese', 'hats', 'goo bad']
    },
    {
        name: "Music Kits",
        link: "csgo/items/music-kits",
        dbFilters: ["music-kits"],
        subTypes: ['shadowed', 'horizon', 'gouda', 'beli', 'cheese', 'hats', 'goo bad']
    },
    {
        name: "Graffiti",
        link: "csgo/items/graffiti",
        dbFilters: ["graffiti"],
        subTypes: ['shadowed', 'horizon', 'gouda', 'beli', 'cheese', 'hats', 'goo bad']
    },
    {
        name: "Agents",
        link: "csgo/items/agents",
        dbFilters: ["agents"],
        subTypes: ['shadowed', 'horizon', 'gouda', 'beli', 'cheese', 'hats', 'goo bad']
    }
]

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectGame() {
    return (
        <Select>
            <SelectTrigger className="w-min hidden lg:flex border-none focus:ring-transparent focus-border-b-2">
                <SelectValue placeholder="CS2" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Games</SelectLabel>
                    <SelectItem value="cs2">CS2</SelectItem>
                    <SelectItem value="dota">DOTA</SelectItem>
                    <SelectItem value="tf2">TF2</SelectItem>
                    <SelectItem value="rust">RUST</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


export default function TopNav() {
    return (
        <div>
            <nav className={cn("flex items-center justify-between p-2", fontSans.variable)}>
                <div className='flex items-center justify-between'>
                    <IconButton icon={<Menu />} className="flex lg:hidden" />
                    <h1 className="text-2xl font-bold mx-2">Logo</h1>
                    <SelectGame />
                    <Button variant='ghost' className="hidden sm:flex items-center justify-center p-2 ">
                        MARKET
                    </Button>
                    <div className="hidden sm:flex items-center justify-between space-x-2 md:ml-32 lg:ml-48">
                        <Search className='w-8 h-8 p-2 -mr-3' />
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