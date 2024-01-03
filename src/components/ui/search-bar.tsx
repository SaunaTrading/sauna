'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { Search as SearchIcon } from "lucide-react";
import { Input, InputProps } from "./input";
import { useState } from "react";
import { debounce } from "lodash";

interface SearchBarProps extends InputProps {
  onEnter?: () => void;
}

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, ...props }, ref) => {
    const [value, setValue] = useState("");

    // submission event listener for enter key
    const handleKeyDown = (
      e: KeyboardEvent,
    ) => {
      if (e.key === "Enter") {
        e.preventDefault();
        props.onEnter?.();
        // console.log("Enter key pressed");
      }
    };

    // mount event listener for enter key
    React.useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);


    const debouncedSearch = debounce((value: string) => {
      // TODO: update pathname with query params
      console.log(value);
    }
    , 1000);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
      debouncedSearch(e.currentTarget.value);
    }

    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className,
        )}
      >
        <SearchIcon className="h-[16px] w-[16px]" />
        <input
          {...props}
          type="search"
          ref={ref}
          className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  },
);

SearchBar.displayName = "Search";

export { SearchBar };