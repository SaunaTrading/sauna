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
                                            <SheetTitle>{itemType.name}</SheetTitle>
                                        </SheetHeader>
                                        <IconButton icon={<ChevronRight />} link={itemType.link} />
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
