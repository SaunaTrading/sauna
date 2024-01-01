import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserSection from "@/components/ui/user-section";
import { IconButton } from './icon-button';
import * as React from "react"

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

// import search icon, bell icon, profile icon, and cart icon outlines and solids
// from lucide react
import { Menu, Search, Bell, BellDot, User, ShoppingCart } from "lucide-react";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})


export default function TopNav() {
    return (
        <nav className={cn("flex items-center justify-between p-2", fontSans.variable)}>
            <div className='flex items-center justify-between'>
                <IconButton icon={<Menu/>} className="flex lg:hidden"/>
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
    );
}