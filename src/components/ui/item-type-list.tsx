'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button';
import { Skeleton } from './skeleton';
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { buttonVariants } from "@/components/ui/button"
import ItemRow from '@/components/ui/item-row';
import { dummyItems, ItemType } from '@/types/items';

const onSubTypeClick = (itemType: ItemType) => {
    console.log(itemType.name)
}

interface Props {
    itemTypes: ItemType[];
    onClick?: (itemType: ItemType) => void;
}

export const HorizontalItemTypeList: React.FC<Props> = ({ itemTypes, onClick }) => {
    // on mount, use the viewport to calculate the number of itemTypes that can be shown assuming
    // their width is 160px
    const [visibleItemCount, setVisibleItemCount] = useState(0);
    // get the path of the current page and use it to determin
    // active game
    // active itemType
    // active itemSubType

    // while the state is zero, render the skeleton
    // once the state is not zero, render the actual component

    const handleResize = () => {
        // get the viewport width
        const viewportWidth = window.innerWidth;
        // calculate the number of itemTypes that can fit in the viewport
        const newVisibleItemCount = Math.floor(viewportWidth / 130);
        // set the visibleItemCount state
        setVisibleItemCount(newVisibleItemCount);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        // get the viewport width
        const viewportWidth = window.innerWidth;
        // calculate the number of itemTypes that can fit in the viewport
        const newVisibleItemCount = Math.floor(viewportWidth / 130);
        // set the visibleItemCount state
        setVisibleItemCount(newVisibleItemCount);
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (visibleItemCount === 0) {
        return (
            <div className='flex space-x-4'>
                {itemTypes.map((itemType) => (
                    <Skeleton key={itemType.name} className='w-160 h-40' />
                ))}
            </div>
        );
    }

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <div className='flex justify-between w-full'>
                    {itemTypes.slice(0, visibleItemCount).map((itemType) => (
                        <NavigationMenuItem key={itemType.name}>
                            <NavigationMenuTrigger>{itemType.name}</NavigationMenuTrigger>
                            <NavigationMenuContent className='left-0 px-4 w-full'>
                                <div className='p-4 flex flex-col w-full'>
                                    <ToggleGroup type="multiple">
                                        <div className='w-full flex justify-between'>
                                            <div className='flex w-full justify-start space-x-4'>
                                                <Button variant='outline' className='border-2 border-foreground'>
                                                    All
                                                </Button>
                                                {itemType.subTypes && (
                                                    <div className='flex'>
                                                        <div className='flex'>
                                                            {itemType.subTypes.slice(0, visibleItemCount).map((subType) => (
                                                                <ToggleGroupItem key={subType} value={subType} className='text-foreground hover:text-foreground' aria-label={`toggle ${subType}`} onClick={() => onSubTypeClick(itemType)}>
                                                                    {subType}
                                                                </ToggleGroupItem>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            {itemType.subTypes.slice(visibleItemCount).length > 0 && (
                                                <Popover>
                                                    <PopoverTrigger><span className={buttonVariants({ variant: "ghost" })}>More</span></PopoverTrigger>
                                                    <PopoverContent>
                                                        {itemType.subTypes.slice(visibleItemCount).map((subType) => (
                                                            <ToggleGroupItem key={subType} value={subType} className='text-foreground hover:text-foreground' aria-label={`toggle ${subType}`} onClick={() => onSubTypeClick(itemType)}>
                                                                {subType}
                                                            </ToggleGroupItem>
                                                        ))}
                                                    </PopoverContent>
                                                </Popover>
                                            )}
                                        </div>
                                    </ToggleGroup>
                                    {itemType.name.toUpperCase()}
                                    <ItemRow/>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
                    {itemTypes.slice(visibleItemCount).length > 0 && (
                        <NavigationMenuItem key={'more'}>
                            <NavigationMenuTrigger>
                                More
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className='right-0 px-2'>
                                <NavigationMenuList className='w-full flex flex-col'>
                                    {itemTypes.slice(visibleItemCount).map((itemType) => (
                                        <Link key={itemType.link} href={itemType.link} legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                {itemType.name}
                                            </NavigationMenuLink>
                                        </Link>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )}
                </div>
            </NavigationMenuList >
        </NavigationMenu >
    );
};

