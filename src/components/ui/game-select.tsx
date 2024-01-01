import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export function GameSelect({className} : {className?: string}) {
    return (
        <Select>
            <SelectTrigger className={cn(className) + "w-min border-none focus:ring-transparent focus-border-b-2"}>
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