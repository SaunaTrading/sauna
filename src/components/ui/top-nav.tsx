import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserSection from "@/components/ui/user-section";
import { IconButton } from './icon-button';
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
                <h1 className="text-2xl font-bold">Logo</h1>
                <Button className="hidden sm:flex items-center justify-center p-2 " asChild>
                    <Link href="/sell">MARKET</Link>
                </Button>
                <div className="hidden sm:flex items-center justify-between space-x-4">
                    <Search />
                    <Input
                        className="hidden sm:block"
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