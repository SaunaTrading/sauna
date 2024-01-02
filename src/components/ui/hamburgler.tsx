import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IconButton } from "@/components/ui/icon-button"
import { Menu } from "lucide-react"
import { GameSelect } from './game-select';
import { Separator } from './separator';
import { dummyTypes, ItemType } from '@/types/items';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Hamburgler() {
    const getItemTypes = () => {
        //get the item types from the game selected
        return dummyTypes;
    }
    const getSubTypes = (itemType: ItemType) => {
        //get the sub types from the item type selected
        return itemType.subTypes;
    }
    return (
        <Sheet>
            <SheetTrigger>
                <div className={"flex md:hidden h-8 w-8 p-2 items-center justify-center rounded-full focus:outline-none hover:bg-accent transition ease-in-out delay-75"}>
                    <Menu />
                </div>
            </SheetTrigger>
            <SheetContent className="flex w-full">
                <div className='flex flex-col items-center w-full'>
                    <GameSelect />
                    <Separator />
                    {
                        getItemTypes().map((itemType: ItemType) => {
                            return (
                                <div key={itemType.link} className='flex flex-col items-center w-full'>
                                    <div className='flex items-center justify-between w-full'>
                                        <SheetHeader>
                                            <SheetTitle asChild><Link href={itemType.link}>{itemType.name}</Link></SheetTitle>
                                        </SheetHeader>
                                        {/* // TODO replace with a button that opens a subtype nav */}
                                        <IconButton icon={<ChevronRight />} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </SheetContent>
        </Sheet>
    )
}
