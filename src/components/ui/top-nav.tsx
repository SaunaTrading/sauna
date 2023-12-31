import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";

export default function TopNav() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-primary p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link href="/">
            <a>
                <Image
                src="/images/logo.png"
                alt="Logo"
                width={50}
                height={50}
                />
            </a>
            </Link>
            <span className="font-semibold text-xl tracking-tight">Next.js TailwindCSS Starter</span>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path
                d="M0 0h20v20H0V0zm2 2v16h16V2H2zm3 3h10v2H5V5zm0 4h10v2H5V9zm0 4h10v2H5v-2z"
                />
            </svg>
            </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
            </div>
            <div>
            <a
                href="www.github.com"
                className={cn(
                "inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-primary hover:bg-white mt-4 lg:mt-0",
                )}
            >
                Github
            </a>
            </div>
        </div>
        </nav>
    );
}