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
                variant='ghost'
                className={cn(className, "h-8 w-8 flex items-center justify-center rounded-full p-2 focus:outline-none")}
                onClick={onClick}
            >
                {icon}
            </Button>)}
            {(link) && (<Button
                variant='ghost'
                className={cn(className, "h-8 w-8 flex items-center justify-center rounded-full p-2 focus:outline-none")}
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