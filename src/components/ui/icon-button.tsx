import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface IconButtonProps {
    icon: React.ReactNode;
    className?: string;
    onClick?: () => void;
    link?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, className, onClick, link }) => {
    return (
        <>
            {(!link) && (<Button
                className={cn(className, "flex items-center justify-center w-10 h-10 rounded-full p-2 focus:outline-none")}
                onClick={onClick}
            >
                {icon}
            </Button>)}
            {(link) && (<Button
                className={cn(className, "flex items-center justify-center w-10 h-10 rounded-full p-2 focus:outline-none")}
                onClick={onClick}
                asChild
            >
                <Link href={link}>
                    {icon}
                </Link>
            </Button>)}
        </>
    );
};